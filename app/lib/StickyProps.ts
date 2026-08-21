import {StickyType, StickyConfigProps} from "@/app/lib/StickyType";

export type StickyProps = {
  title: string;
  setTitle: (title: string) => void;
  date?: Date;
  setDate?: (date: Date) => void;
  stickyType: StickyType;
  stickyConfig: StickyConfigProps;
  headerSticky: boolean;
};
