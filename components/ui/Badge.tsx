import { CategorySlug } from "@/types/article";

const categoryStyles: Record<CategorySlug, string> = {
  world: "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300",
  business: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  tech: "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300",
  sports: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
  culture: "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300",
  opinion: "bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-300",
};

export default function Badge({ category, label }: { category: CategorySlug; label: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide ${categoryStyles[category]}`}
    >
      {label}
    </span>
  );
}
