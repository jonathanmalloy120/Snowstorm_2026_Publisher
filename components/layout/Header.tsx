import Link from "next/link";
import CategoryNav from "@/components/layout/CategoryNav";
import Icon from "@/components/ui/Icon";

export default function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto flex max-w-6xl flex-col px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-black tracking-tight text-neutral-950 dark:text-neutral-50">
            The Snowstorm Herald
          </Link>
          <Link
            href="/saved"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50"
          >
            <Icon name="bookmark" size={16} />
            Saved
          </Link>
        </div>
        <CategoryNav />
      </div>
    </header>
  );
}
