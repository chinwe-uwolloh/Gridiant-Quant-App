import { CommandShell } from "@/components/layout/CommandShell";
import { TopCommandBar } from "@/components/navigation/TopCommandBar";
import { FleetMapSurface } from "@/components/fleet/FleetMapSurface";

export default function FleetPage() {
  return <CommandShell><TopCommandBar /><FleetMapSurface /></CommandShell>;
}
