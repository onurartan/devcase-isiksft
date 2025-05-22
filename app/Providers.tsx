"use client";

import React from "react";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <NuqsAdapter>{children}</NuqsAdapter>;
};

export default Provider;
