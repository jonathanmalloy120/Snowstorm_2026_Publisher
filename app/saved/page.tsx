import SavedTabs from "@/components/saved/SavedTabs";

export default function SavedPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">Saved</h1>
      <SavedTabs />
    </div>
  );
}
