import { categoriesColumns } from "@/components/categories-columns";
import { DataTable } from "@/components/data-table";
import {
  FlashcardColumn,
  flashcardsColumns,
} from "@/components/flashcards-columns";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Cateogry } from "@/drizzle/schema";

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
    <div className="flex flex-col md:flex-row gap-6">
      <Card>
        <CardHeader className="font-bold text-xl">Categories</CardHeader>
        <CardContent>
          <DataTable columns={categoriesColumns} data={categories} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="font-bold text-xl">Flashcards</CardHeader>
        <CardContent>
          <DataTable columns={flashcardsColumns} data={flashcards} />
        </CardContent>
      </Card>
    </div>
  );
}
