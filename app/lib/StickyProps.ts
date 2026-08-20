import {StickyType, StickyConfigProps} from "@/app/lib/StickyType";

export type StickyProps = {
  title: string;
  setTitle: (title: string) => void;
  date?: string;
  setDate?: (date: string) => void;
  stickyType: StickyType;
  stickyConfig: StickyConfigProps;
  headerSticky: boolean;
};
