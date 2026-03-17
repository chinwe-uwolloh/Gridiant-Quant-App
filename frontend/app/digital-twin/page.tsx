import { CommandShell } from "@/components/layout/CommandShell";
import { TopCommandBar } from "@/components/navigation/TopCommandBar";
import { DigitalTwinPanel } from "@/components/digitalTwin/DigitalTwinPanel";

export default function DigitalTwinPage() {
  return <CommandShell><TopCommandBar /><DigitalTwinPanel /></CommandShell>;
}
