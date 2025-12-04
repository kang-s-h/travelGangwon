export const formatBrTag = (value: string): React.ReactNode => {
  if (!value) return null;

  const lines = value.split('<br>');
  return lines.map((line, i) => (
    <span key={i}>
      {line}
      {i < lines.length - 1 && <br />}
    </span>
  ));
};
