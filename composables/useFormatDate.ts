/* eslint-disable @typescript-eslint/no-magic-numbers -- the numbers format strings */
function formatDate(isoDate: string): string {
  const date = new Date(isoDate);

  let day = date.getDate().toString();
  day = day.padStart(2, "0");

  let month = date.toLocaleString("default", { month: "short" });
  month = month.replace(".", "");
  month = month.charAt(0).toUpperCase() + month.slice(1);

  return `${day} ${month}`;
}

export interface UseFormatDateReturn {
  formatDate: (isoString: string) => string;
}

export default function useFormatDate(): UseFormatDateReturn {
  return { formatDate };
}
