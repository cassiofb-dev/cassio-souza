import cloneDeep from "lodash/cloneDeep";

import React from "react";

import { useColorMode } from "@docusaurus/theme-common";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";

import compareStringNumbers from "../../src/utils/compareStringNumbers";
import numericRegex from "../../src/utils/numericRegex";
import randomString from "../../src/utils/randomString";

import INMETRO_AIRCON_DATABASE from "./inmetro_aircon_database.json";

const columnsInitialState: GridColDef[] = [
  {
    field: "FORNECEDOR",
    headerName: "Provider",
    width: 192,
  },
  {
    field: "MARCA",
    headerName: "Brand",
    width: 192,
  },
  {
    field: "TIPO",
    headerName: "Type",
    width: 192,
  },
  {
    field: "UNIDADE INTERNA (SPLIT)",
    headerName: "Internal Unity (Split)",
    width: 192,
  },
  {
    field: "UNIDADE EXTERNA (SPLIT)",
    headerName: "External Unity (Split)",
    width: 192,
  },
  {
    field: "MODELO (JANELA)",
    headerName: "Model (Window)",
    width: 192,
  },
  {
    field: "FUNÇÃO",
    headerName: "Function",
    width: 192,
  },
  {
    field: "TENSÃO",
    headerName: "Tension",
    width: 192,
  },
  {
    field: "ROTAÇÃO",
    headerName: "Rotation",
    width: 192,
  },
  {
    field: "FLUÍDO REFRIGERANTE",
    headerName: "Refrigerant Fluid",
    width: 192,
  },
  {
    field: "N° DE REGISTRO",
    headerName: "Registration Number",
    width: 192,
  },
  {
    field: "CAPACIDADE DE REFRIGERAÇÃO (BTU\/H)",
    headerName: "Refrigeration Capacity (BTU/H)",
    width: 192,
    sortComparator: compareStringNumbers,
  },
  {
    field: "IDRS",
    headerName: "IDRS",
    width: 192,
    sortComparator: compareStringNumbers,
  },
  {
    field: "CONSUMO DE ENERGIA (KWH\/ANO)",
    headerName: "Energy Consumption (KWH/Year)",
    width: 192,
    sortComparator: compareStringNumbers,
  },
  {
    field: "FAIXA DE CLASSIFICAÇÃO",
    headerName: "Classification",
    width: 192,
  },
];

export default function AirconDataGrid() {
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

  const comparableFields = [
    "CAPACIDADE DE REFRIGERAÇÃO (BTU\/H)",
    "IDRS",
    "CONSUMO DE ENERGIA (KWH\/ANO)",
  ];

  const [selectedValues, setSelectedValues] = React.useState({
    baseAircon: null,
  });

  const [rows, setRows] = React.useState(cloneDeep(INMETRO_AIRCON_DATABASE));
  const [columns, setColumns] = React.useState(cloneDeep(columnsInitialState));

  const handleBaseAirconChange = (event: any) => {
    setRows(cloneDeep(INMETRO_AIRCON_DATABASE));
    setColumns(cloneDeep(columnsInitialState));

    setSelectedValues({
      ...selectedValues,
      baseAircon: event.target.value,
    });
  }

  const applyChanges = () => {
    setRows(cloneDeep(INMETRO_AIRCON_DATABASE));
    setColumns(cloneDeep(columnsInitialState));

    const { baseAircon } = selectedValues;

    const newRows = cloneDeep(INMETRO_AIRCON_DATABASE);
    const newColumns = cloneDeep(columnsInitialState) as GridColDef[];

    const baseAirconRow = cloneDeep(newRows.filter(row => row["UNIDADE INTERNA (SPLIT)"] === baseAircon).pop());

    if (Boolean(baseAirconRow) && baseAircon) {
      for (const comparableField of comparableFields) {
        for (const row of newRows) {
          row[comparableField] = (row[comparableField] / baseAirconRow[comparableField]) * 100;
          row[comparableField] = row[comparableField].toFixed(3) + "%";
        }
      }
    }

    setRows(cloneDeep(newRows));
    setColumns(cloneDeep(newColumns));
  };

  React.useEffect(() => {
    applyChanges();
  }, [selectedValues]);

  const createBaseAirconSelectItem = (airconData, index) => {
    if (airconData["UNIDADE INTERNA (SPLIT)"]) {
      return (
        <option key={index}>{airconData["UNIDADE INTERNA (SPLIT)"]}</option>
      );
    }
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
          <label htmlFor="baseAircon" style={{ marginRight: "16px" }}>
            Base Aircon Internal Unity (100%):
          </label>
          <select name="baseAircon" id="baseAircon" onChange={handleBaseAirconChange}>
            <option value="">None</option>
            {INMETRO_AIRCON_DATABASE.map(createBaseAirconSelectItem)}
          </select>
        </div>
      </div>
      <ThemeProvider theme={colorMode === "dark" ? darkTheme : lightTheme}>
        <CssBaseline />
        <DataGrid
          getRowId={(row) => randomString()}
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
