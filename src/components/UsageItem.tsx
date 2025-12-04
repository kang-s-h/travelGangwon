interface UsageItemProps {
  label: string;
  value: string;
}

function UsageItem({ label, value }: UsageItemProps) {
  const hasValue = !!value;

  return (
    <p className="text-sm">
      <span className="font-medium">
        {label} :
      </span>
      {" "}
      <span className={hasValue ? "text-slate-700" : "text-xs text-slate-400"}>
        {value || "정보없음"}
      </span>
    </p>
  );
}

export default UsageItem;
