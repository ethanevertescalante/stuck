import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/lib/queryKeys";
import { getStickies } from "@/lib/sticky";
export function useStickies() {
  return useQuery({
    queryKey: queryKeys.stickies.all,
    queryFn: getStickies,
  });
}

export function useSticky(stickyId: string) {
  return useQuery({
    queryKey: [queryKeys.stickies.all, stickyId],
    queryFn: getStickies,
  })
}
