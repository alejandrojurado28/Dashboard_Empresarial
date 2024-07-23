"use client"
 
import * as React from "react";

import {
    ChevronUp
} from 'lucide-react'

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";

export type TableIntegrationsProps = {
    app: string,
    icon: string,
    type: "Finance" | "CRM" | "Marketplace",
    rate: number,
    profit: number,
}

const data: Payment[] = [
    {
      id: "m5gr84i9",
      amount: 316,
      status: "success",
      email: "ken99@yahoo.com",
    },
  ]

export function TableIntegrations() {
  return (
    <div>TableIntegrations</div>
  )
}
