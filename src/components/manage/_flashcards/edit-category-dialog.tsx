import { Cateogry } from "@/drizzle/schema";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";

export default function EditCategory({
  children,
  category,
}: {
  children: React.ReactNode;
  category: Cateogry;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="gap-6">
        <DialogHeader>
          <DialogTitle>Edit category name</DialogTitle>
        </DialogHeader>
        <form id="create-category" action="">
          <div className="grid items-center gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              type="name"
              id="name"
              placeholder={category.name}
              defaultValue={category.name}
            />
          </div>
        </form>
        <DialogFooter>
          <Button form="create-category" type="submit">
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
