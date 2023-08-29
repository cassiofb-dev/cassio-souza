import React from "react";

import GpuTableDatabase from "./GpuDataGrid";

import GPU_RASTERIZATION_DATABASE from "./gpu_rasterization_database.json";

export default function GpuRasterizationDataGrid() {
  return <GpuTableDatabase gpuDatabase={GPU_RASTERIZATION_DATABASE} />;
}
