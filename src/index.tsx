import React from "react";

import { DataGridPremium } from "@mui/x-data-grid-premium";
import ReactDOM from "react-dom/client";

const columns = [
  {
    field: "name",
    flex: 1,
  },
];

const rows = [
  {
    id: 1,
    name: "test 1",
  },
  {
    id: 2,
    name: "test 2",
  },
  {
    id: 3,
    name: "test 3",
  },
];

const totalRecords = rows.length;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DataGridPremium columns={columns} rowCount={totalRecords} rows={rows} />
  </React.StrictMode>
);
