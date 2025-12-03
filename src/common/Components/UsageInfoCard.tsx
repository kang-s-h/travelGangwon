import UsageItem from "./UsageItem";

interface Item {
  label: string;
  value: string;
}

interface UsageInfoProps {
  usageItems: Item[];
}

export default function UsageInfoCard({ usageItems }: UsageInfoProps) {
  if (!usageItems) return null;

  return (
    <aside className="space-y-3 rounded-2xl bg-white/90 p-4 text-slate-700 shadow-sm ring-1 ring-slate-200/70">
      <p className="text-sm font-semibold text-slate-900">
        이용 안내
      </p>
      <div className="space-y-3">
        {usageItems.map((item) => (
          <UsageItem
            key={item.label}
            label={item.label}
            value={item.value}
          />
        ))}
      </div>
    </aside>
  );
}
