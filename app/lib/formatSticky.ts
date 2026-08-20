import { format } from "date-fns";
import { DateTime } from "luxon";

export function formatStickyDate(date: DateTime) {
  return format(date, "M/d/yy '@' h:mma");
}
