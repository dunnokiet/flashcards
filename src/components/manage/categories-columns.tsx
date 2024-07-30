"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Cateogry } from "@/drizzle/schema";

import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import EditCategory from "@/components/manage/_categories/edit-category-dialog";
import DeleteCateogry from "@/components/manage/_categories/delete-category-confirm";

export const categoriesColumns: ColumnDef<Cateogry>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "slug",
    header: "Slug",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const category = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <EditCategory category={category}>
              <DropdownMenuItem
                className="cursor-pointer"
                onSelect={(e) => {
                  e.preventDefault();
                }}
              >
                Edit
              </DropdownMenuItem>
            </EditCategory>
            <DeleteCateogry category={category}>
              <DropdownMenuItem
                className="cursor-pointer"
                onSelect={(e) => {
                  e.preventDefault();
                }}
              >
                Delete
              </DropdownMenuItem>
            </DeleteCateogry>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
