import { CommandShell } from "@/components/layout/CommandShell";
import { TopCommandBar } from "@/components/navigation/TopCommandBar";
import { TimelineWall } from "@/components/schedule/TimelineWall";

export default function ScheduleStudioPage() {
  return <CommandShell><TopCommandBar /><TimelineWall /></CommandShell>;
}
