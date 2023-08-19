import React from "react";
import { useEffect } from "react";

import GPU_RASTERIZATION_DATABASE from "./gpu_rasterization_database.json";

import DataTable from 'datatables.net-dt';
import 'datatables.net-dt/css/jquery.dataTables.min.css';

export default function GpuRasterizationDatabaseComponent() {
  const gpus = GPU_RASTERIZATION_DATABASE;

  useEffect(() => {
    new DataTable('#gpuRasterizationDatabaseComponent', {
      // scrollY: '400',
      order: [1, 'desc'],
    });
  }, []);

  return (
    <table id="gpuRasterizationDatabaseComponent">
      <thead>
        <tr>
        {
          Object.keys(gpus[0]).map((columnName, columnIndex) => {
            return (
              <th key={columnIndex}>
                {columnName}
              </th>
            );
          })
        }
        </tr>
      </thead>
      <tbody>
        {
          gpus.map((gpu, gpuIndex) => {
            return (
              <tr key={gpuIndex}>
                <th>
                  {gpu["Graphics Card"]}
                </th>
                <th>
                  {gpu["1080p Ultra"]}
                </th>
                <th>
                  {gpu["1080p Medium"]}
                </th>
                <th>
                  {gpu["1440p Ultra"]}
                </th>
                <th>
                  {gpu["4K Ultra"]}
                </th>
                <th>
                  {gpu["Chipset"]}
                </th>
                <th>
                  {gpu["Shaders Count"]}
                </th>
                <th>
                  {gpu["Clock"]}
                </th>
                <th>
                  {gpu["VRAM"]}
                </th>
                <th>
                  {gpu["Bandwidth"]}
                </th>
                <th>
                  {gpu["TDP"]}
                </th>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
}