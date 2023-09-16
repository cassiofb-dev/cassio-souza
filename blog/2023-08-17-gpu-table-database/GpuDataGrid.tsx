import cloneDeep from "lodash/cloneDeep";

import React from "react";

import { useColorMode } from "@docusaurus/theme-common";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";

import compareStringNumbers from "../../src/utils/compareStringNumbers";
import numericRegex from "../../src/utils/numericRegex";

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
    sortComparator: compareStringNumbers,
  },
  {
    field: "1080p Medium",
    headerName: "1080p Medium\n(FPS)",
    width: 192,
    sortComparator: compareStringNumbers,
  },
  {
    field: "1440p Ultra",
    headerName: "1440p Ultra\n(FPS)",
    width: 192,
    sortComparator: compareStringNumbers,
  },
  {
    field: "4K Ultra",
    headerName: "4K Ultra\n(FPS)",
    width: 192,
    sortComparator: compareStringNumbers,
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

export default function GpuTableDatabase({ gpuDatabase }) {
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

  const fpsFields = [
    "1080p Ultra",
    "1080p Medium",
    "1440p Ultra",
    "4K Ultra",
  ];

  const unitMap = {
    TDP: "FPS per Watts",
    Bandwidth: "FPS per GB/s",
    VRAM: "FPS per GB",
    Clock: "FPS per MHz",
    "Shaders Count": "FPS per Shaders Count",
  };

  const [selectedValues, setSelectedValues] = React.useState({
    divisorField: null,
    baseGpu: null,
  });

  const [rows, setRows] = React.useState(cloneDeep(gpuDatabase));
  const [columns, setColumns] = React.useState(cloneDeep(columnsInitialState));

  const handleFpsDivisorChange = (event: any) => {
    setRows(cloneDeep(gpuDatabase));
    setColumns(cloneDeep(columnsInitialState));

    setSelectedValues({
      ...selectedValues,
      divisorField: event.target.value,
    });
  };

  const handleBaseGpuChange = (event: any) => {
    setRows(cloneDeep(gpuDatabase));
    setColumns(cloneDeep(columnsInitialState));

    setSelectedValues({
      ...selectedValues,
      baseGpu: event.target.value,
    });
  }

  const applyChanges = () => {

    setRows(cloneDeep(gpuDatabase));
    setColumns(cloneDeep(columnsInitialState));

    const { divisorField, baseGpu } = selectedValues;

    const newRows = cloneDeep(gpuDatabase);
    const newColumns = cloneDeep(columnsInitialState) as GridColDef[];

    if (Boolean(divisorField)) {
      for (const fpsField of fpsFields) {
        for (const row of newRows) {
          row[fpsField] =
            row[fpsField] /
            row[divisorField].match(numericRegex)[0];
          row[fpsField] = row[fpsField].toFixed(3);
        }
      }

      for (const column of newColumns) {
        column.headerName = column.headerName.replace(
          "FPS",
          unitMap[divisorField]
        );
      }
    }

    const baseGpuRow = cloneDeep(newRows.filter(row => row["Graphics Card"] === baseGpu).pop());

    if (Boolean(baseGpuRow) && baseGpuRow) {
      for (const fpsField of fpsFields) {
        for (const row of newRows) {
          row[fpsField] = (row[fpsField] / baseGpuRow[fpsField]) * 100;
          row[fpsField] = row[fpsField].toFixed(3) + "%";
        }
      }
    }

    setRows(cloneDeep(newRows));
    setColumns(cloneDeep(newColumns));
  };

  React.useEffect(() => {
    applyChanges()
  }, [selectedValues]);

  const createBaseGpuSelectItem = (gpuData, index) => {
    return <option key={index}>{gpuData["Graphics Card"]}</option>
  };

  return (
    <div style={{ height: 400, width: "100%", marginBottom: "128px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "16px",
        }}
      >
        <div style={{ margin: "4px" }}>
          <label htmlFor="fpsDivisor" style={{ marginRight: "16px" }}>
            Divide FPS by:
          </label>
          <select name="fpsDivisor" id="fpsDivisor" onChange={handleFpsDivisorChange}>
            <option value="">None</option>
            <option value="Shaders Count">Shaders Count</option>
            <option value="Clock">Clock</option>
            <option value="VRAM">VRAM</option>
            <option value="Bandwidth">Bandwidth</option>
            <option value="TDP">TDP</option>
          </select>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "16px",
        }}
      >
        <div style={{ margin: "4px" }}>
          <label htmlFor="baseGpu" style={{ marginRight: "16px" }}>
            Base GPU (100%):
          </label>
          <select name="baseGpu" id="baseGpu" onChange={handleBaseGpuChange}>
            <option value="">None</option>
            {gpuDatabase.map(createBaseGpuSelectItem)}
          </select>
        </div>
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
            "& .MuiDataGrid-columnHeaderTitle": {
              textOverflow: "clip",
              whiteSpace: "break-spaces",
              lineHeight: 1.5,
            },
          }}
        />
      </ThemeProvider>
    </div>
  );
}
