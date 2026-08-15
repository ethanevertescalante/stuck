import ReminderIcon from "@/public/ReminderIcon.png";
import NoteIcon from "@/public/NoteIcon.png";
import type { StaticImageData } from "next/image";

export const Reminder = "REMINDER";
export const Note = "NOTE";

export type StickyType = "NOTE" | "REMINDER";

export const StickyConfig: Record<
  StickyType,
  {
    color: string;
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
  }
> = {
  NOTE: {
    color: "bg-notes-yellow",
    icon: NoteIcon,
    size: {
      header: {
        width: 80,
        height: 95,
      },
      normal: {
        width: 17,
        height: 22,
      },
    },
  },

  REMINDER: {
    color: "bg-reminder-blue",
    icon: ReminderIcon,
    size: {
      header: {
        width: 129,
        height: 96,
      },
      normal: {
        width: 31,
        height: 28,
      },
    },
  },
};
