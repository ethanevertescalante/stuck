import { StickyType, StickyConfigProps } from "@/lib/StickyType";

export type StickyProps = {
  title: string;
  setTitle: (title: string) => void;
  date: Date;
  setDate: (date: Date) => void;
  stickyType: StickyType;
  stickyConfig: StickyConfigProps;
  headerSticky: boolean;
};

export type BoardStickyProps = {
  id: string;
  title: string;
  content?: string;
  date: Date;
  stickyType: StickyType;
};
