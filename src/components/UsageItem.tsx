interface UsageItemProps {
  label: string;
  value: React.ReactNode;
}

function UsageItem({ label, value }: UsageItemProps) {
  const hasValue = !!value;

  return (
    <p className="text-sm flex items-start gap-1">
      <span className="font-medium whitespace-nowrap">
        {label} :
      </span>
      <span className={hasValue ? "text-slate-700 flex-1" : "text-xs text-slate-400 leading-5"}>
        {value || "정보없음"}
      </span>
    </p>
  );
}

export default UsageItem;