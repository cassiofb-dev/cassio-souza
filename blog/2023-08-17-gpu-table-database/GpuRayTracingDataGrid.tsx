import React from "react";

import GpuTableDatabase from "./GpuDataGrid";

import GPU_RAYTRACING_DATABASE from "./gpu_ray_tracing_database.json";

export default function GpuRayTracingDataGrid() {
  return <GpuTableDatabase gpuDatabase={GPU_RAYTRACING_DATABASE} />;
}
