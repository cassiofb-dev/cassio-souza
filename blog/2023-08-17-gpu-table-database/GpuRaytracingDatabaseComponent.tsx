import cloneDeep from "lodash/cloneDeep";

import React from "react";

import { useColorMode } from "@docusaurus/theme-common";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";

import GPU_RAYTRACING_DATABASE from "./gpu_ray_tracing_database.json";

const numericRegex = /[+-]?([0-9]*[.])?[0-9]+/;
const numberComparator = (a: string, b: string) => {
  const x = Number(a?.match(numericRegex).shift()) || 0;
  const y = Number(b?.match(numericRegex).shift()) || 0;

  return x - y;
};

const columnsInitialState: GridColDef[] = [
  {
    field: "Graphics Card",
    headerName: "Graphics Card",
    width: 192,
  },
  {
    field: "1080p Ultra",
    headerName: "1080p Ultra\n(FPS)",
    width: 192,
    sortComparator: numberComparator,
  },
  {
    field: "1080p Medium",
    headerName: "1080p Medium\n(FPS)",
    width: 192,
    sortComparator: numberComparator,
  },
  {
    field: "1440p Ultra",
    headerName: "1440p Ultra\n(FPS)",
    width: 192,
    sortComparator: numberComparator,
  },
  {
    field: "4K Ultra",
    headerName: "4K Ultra\n(FPS)",
    width: 192,
    sortComparator: numberComparator,
  },
  {
    field: "Chipset",
    headerName: "Chipset",
    width: 192,
  },
  {
    field: "Shaders Count",
    headerName: "Shaders Count",
    width: 192,
  },
  {
    field: "Clock",
    headerName: "Clock",
    width: 192,
  },
  {
    field: "VRAM",
    headerName: "VRAM",
    width: 192,
  },
  {
    field: "Bandwidth",
    headerName: "Bandwidth",
    width: 192,
  },
  {
    field: "TDP",
    headerName: "TDP",
    width: 192,
  },
];

export default function DataTable() {
  const { colorMode } = useColorMode();

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const divisibleFields = [
    "1080p Ultra",
    "1080p Medium",
    "1440p Ultra",
    "4K Ultra",
  ];

  const unitMap = {
    "TDP": "FPS per Watts",
    "Bandwidth": "FPS per GB/s",
    "VRAM": "FPS per GB",
    "Clock": "FPS per MHz",
    "Shaders Count": "FPS per Shaders Count",
  };

  const [rows, setRows] = React.useState(cloneDeep(GPU_RAYTRACING_DATABASE));
  const [columns, setColumns] = React.useState(cloneDeep(columnsInitialState));

  const handleChange = (event: any) => {
    setRows(cloneDeep(GPU_RAYTRACING_DATABASE));
    setColumns(cloneDeep(columnsInitialState));

    const selectedDivisorField = event.target.value;

    const newRows = cloneDeep(GPU_RAYTRACING_DATABASE);
    const newColumns = cloneDeep(columnsInitialState) as GridColDef[];
    if (Boolean(selectedDivisorField)) {
      for (const divisibleField of divisibleFields) {
        for (const row of newRows) {
          row[divisibleField] = row[divisibleField] / row[selectedDivisorField].match(numericRegex)[0];
          row[divisibleField] = row[divisibleField].toFixed(3);
        }
      }

      for (const column of newColumns) {
        column.headerName = column.headerName.replace("FPS", unitMap[selectedDivisorField]);
      }
    }

    setRows(cloneDeep(newRows));
    setColumns(cloneDeep(newColumns));
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "16px",
        }}
      >
        <label htmlFor="divideField" style={{ marginRight: "16px" }}>
          Divide FPS by:
        </label>
        <select name="divideField" id="divideField" onChange={handleChange}>
          <option value="">None</option>
          <option value="Shaders Count">Shaders Count</option>
          <option value="Clock">Clock</option>
          <option value="VRAM">VRAM</option>
          <option value="Bandwidth">Bandwidth</option>
          <option value="TDP">TDP</option>
        </select>
      </div>
      <ThemeProvider theme={colorMode === "dark" ? darkTheme : lightTheme}>
        <CssBaseline />
        <DataGrid
          getRowId={(row) => row["Graphics Card"]}
          rows={rows}
          columns={columns}
          slots={{
            toolbar: GridToolbar,
          }}
          sx={{
            '& .MuiDataGrid-columnHeaderTitle': {
                textOverflow: "clip",
                whiteSpace: "break-spaces",
                lineHeight: 1.5,
            }
          }}
        />
      </ThemeProvider>
    </div>
  );
}
