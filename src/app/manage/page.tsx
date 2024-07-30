import { categoriesColumns } from "@/components/manage/categories-columns";
import {
  FlashcardColumn,
  flashcardsColumns,
} from "@/components/manage/flashcards-columns";
import { DataTable } from "@/components/manage/data-table";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Cateogry } from "@/drizzle/schema";
import CreateCategory from "@/components/manage/_categories/create-category-dialog";
import CreateFlashcard from "@/components/manage/_flashcards/create-flashcard-dialog";

export default function Manage() {
  const categories: Cateogry[] = [
    {
      id: "1",
      name: "1",
      slug: "1",
    },
    {
      id: "2",
      name: "2",
      slug: "2",
    },
  ];

  const flashcards: FlashcardColumn[] = [
    {
      id: "1",
      question: "1",
      answer: "1",
      slug: "1",
      category: categories[0],
    },
    {
      id: "2",
      question: "2",
      answer: "2",
      slug: "2",
      category: categories[0],
    },
  ];

  return (
    <div className="flex flex-col gap-6 md:flex-row">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <span className="text-center text-xl font-bold">Categories</span>
          <CreateCategory />
        </CardHeader>
        <CardContent>
          <DataTable columns={categoriesColumns} data={categories} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <span className="text-center text-xl font-bold">Flashcards</span>
          <CreateFlashcard categories={categories} />
        </CardHeader>
        <CardContent>
          <DataTable columns={flashcardsColumns} data={flashcards} />
        </CardContent>
      </Card>
    </div>
  );
}
