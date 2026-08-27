import ReminderIcon from "@/public/ReminderIcon.svg";
import NoteIcon from "@/public/NoteIcon.svg";
import type { StaticImageData } from "next/image";

export type StickyConfigProps = {
  title: string;
  color: string;
  accentColor: string;
  icon: StaticImageData;
  size: {
    header: {
      width: number;
      height: number;
    };
    normal: {
      width: number;
      height: number;
    };
  };
};

export const Reminder = "REMINDER";
export const Note = "NOTE";
export type StickyType = "NOTE" | "REMINDER";

export const StickyConfig: Record<StickyType, StickyConfigProps> = {
  NOTE: {
    title: "Note",
    color: "bg-notes-yellow",
    accentColor: "bg-notes-yellow-accent",
    icon: NoteIcon,
    size: {
      header: {
        width: 80,
        height: 95,
      },
      normal: {
        width: 30,
        height: 40,
      },
    },
  },

  REMINDER: {
    title: "Reminder",
    color: "bg-reminder-blue",
    accentColor: "bg-reminder-blue-accent",
    icon: ReminderIcon,
    size: {
      header: {
        width: 129,
        height: 96,
      },
      normal: {
        width: 50,
        height: 40,
      },
    },
  },
};
