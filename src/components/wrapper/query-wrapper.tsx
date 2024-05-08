"use client";

//* Libraries imports
import { QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";

//* Utils imports
import { queryClient } from "@/utils/query-client";

type Props = {
  children: ReactNode;
};

export function QueryWrapper({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}