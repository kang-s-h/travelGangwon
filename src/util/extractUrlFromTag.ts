export const extractUrlFromTag = (htmlString: string): string => {
  if (!htmlString) return "";

  const regex = /href=["']([^"']+)["']/;
  const match = htmlString.match(regex);

  return match ? match[1] : htmlString;
};