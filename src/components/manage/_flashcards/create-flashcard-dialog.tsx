import { Cateogry } from "@/drizzle/schema";

import { ComboboxCategory } from "@/components/manage/_flashcards/select-category";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

export default function CreateFlashcard({
  categories,
}: {
  categories: Cateogry[];
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="outline">
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="gap-6">
        <DialogHeader>
          <DialogTitle>Create a new flashcard</DialogTitle>
        </DialogHeader>
        <form className="grid gap-4" id="create-flashcard" action="">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input name="name" id="name" placeholder="" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="question">Question</Label>
            <Input name="question" id="question" placeholder="" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="answer">Answer</Label>
            <Textarea name="answer" id="answer" placeholder="" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="question">Add to category</Label>
            <ComboboxCategory
              categories={categories.map(({ name }) => ({
                label: name,
                value: name,
              }))}
            />
          </div>
        </form>
        <DialogFooter>
          <Button form="create-flashcard" type="submit">
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
