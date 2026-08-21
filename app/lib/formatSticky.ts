import { format } from "date-fns";


export function formatStickyDateTime(date: Date) {
  return format(date, "M/d/yy '@' h:mma");
}

export function formatStickyTime(date: Date) {
  return format(date, " '@' h:mma")
}

export function formatStickyDate(date: Date) {
  return format(date, "M/d/yy");
}
