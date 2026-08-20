import { DateTime } from "luxon";
import { Calendar } from "@/components/ui/calendar";
import { formatStickyDate } from "@/app/lib/formatSticky";

type ReminderDateTimeCalendarProps = {
  date: DateTime;
  setDate: (date: DateTime) => void;
};

export default function ReminderDateTimeCalendar({
  date,
  setDate,
}: ReminderDateTimeCalendarProps) {
  return (
    <div className="flex h-full flex-col">
      <Calendar
        mode="single"
        selected={date}
        onSelect={(date) => {
          if (!date) return;

          setDate((current) => {
            const next = new Date(date);

            next.setHours(current.getHours());
            next.setMinutes(current.getMinutes());

            return next;
          });
        }}
      />

      <div className="mt-auto flex items-center gap-2">
        <input
          type="time"
          value={formatStickyDate(date)}
          onChange={(e) => {
            const [hours, minutes] = e.target.value.split(":");

            setDate((current) => {
              const next = new Date(current);

              next.setHours(Number(hours));
              next.setMinutes(Number(minutes));

              return next;
            });
          }}
          className="rounded border px-2 py-1"
        />

        <button
          type="button"
          onClick={onDone}
          className="ml-auto text-sm hover:opacity-70"
        >
          Done
        </button>
      </div>
    </div>
  );
}
