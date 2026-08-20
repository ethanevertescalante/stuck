import ReminderIcon from "@/public/ReminderIcon.svg";
import NoteIcon from "@/public/NoteIcon.svg";
import type { StaticImageData } from "next/image";

export type StickyConfigProps = {
  title: string;
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
};

export const Reminder = "REMINDER";
export const Note = "NOTE";

export type StickyType = "NOTE" | "REMINDER";

export const StickyConfig: Record<
  StickyType,
  {
    title: string;
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
    title: "Note",
    color: "bg-notes-yellow",
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
