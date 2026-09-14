import Link from "next/link";
import { categories } from "@/data/categories";

export default function CategoryNav() {
  return (
    <nav className="flex flex-wrap gap-x-5 gap-y-2 border-t border-neutral-200 py-3 text-sm font-medium text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/category/${category.slug}`}
          className="hover:text-neutral-950 dark:hover:text-neutral-50"
        >
          {category.label}
        </Link>
      ))}
    </nav>
  );
}
