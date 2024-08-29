import * as React from 'react';
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
} from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';

import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { Card } from '../ui/card';
import { ActionDrawer } from '../action-drawer'; // Ensure to adjust the import path
import { SupplyForm } from '../../features/supply';
import { WithdrawCollateral, WithdrawLiquidity } from '../../features/withdraw';
import { RepayForm } from '../../features/repay/components';
import { AddCollateralForm } from '../../features/add-collateral-for-borrow/components';
import { BorrowForm } from '../../features/borrow/components/borrow-form';

const data: Loan[] = [
  {
    id: 0,
    LA: 'AAVE',
    CA: 'COMP',
  },
  {
    id: 1,
    LA: 'DAI',
    CA: 'COMP',
  },
  {
    id: 2,
    LA: 'COMP',
    CA: 'AAVE',
  },
];

export type Loan = {
  id: number;
  LA: string;
  CA: string;
};
const loanAssetImages: Record<Loan['LA'], string> = {
  AAVE: '/img/aave.png',
  DAI: '/img/dai.png',
  COMP: 'https://cryptologos.cc/logos/compound-comp-logo.png?v=032',
};

const collateralAssetImages: Record<Loan['CA'], string> = {
  AAVE: '/img/aave.png',
  DAI: '/img/dai.png',
  COMP: 'https://cryptologos.cc/logos/compound-comp-logo.png?v=032',
};

export const columns: ColumnDef<Loan>[] = [
  {
    accessorKey: 'LA',
    header: 'Loan Asset',
    cell: ({ row }) => {
      const loanAsset = row.getValue('LA') as Loan['LA'];
      return (
        <div className="capitalize">
          <img
            src={loanAssetImages[loanAsset]}
            alt={loanAsset}
            className="w-6 h-6 inline-block mr-2"
          />
          {loanAsset}
        </div>
      );
    },
  },
  {
    accessorKey: 'CA',
    header: 'Collateral Asset',
    cell: ({ row }) => {
      const collateralAsset = row.getValue('CA') as Loan['CA'];
      return (
        <div className="capitalize">
          <img
            src={collateralAssetImages[collateralAsset]}
            alt={collateralAsset}
            className="w-6 h-6 inline-block mr-2"
          />
          {collateralAsset}
        </div>
      );
    },
  },

  {
    id: 'actions',
    header: 'Action',
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <SupplyForm />
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <BorrowForm />
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <AddCollateralForm />
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <WithdrawLiquidity />
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <WithdrawCollateral />
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <RepayForm />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <Card className="w-[80%] bg-[#FFFFFF] border-0 shadow-none p-5 font-semibold">
      <div className="flex items-center">
        {/* <Input
          placeholder="Search ..."
          value={(table.getColumn('LA')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('LA')?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        /> */}
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
