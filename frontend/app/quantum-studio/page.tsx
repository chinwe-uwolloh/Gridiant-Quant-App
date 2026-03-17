import { CommandShell } from "@/components/layout/CommandShell";
import { TopCommandBar } from "@/components/navigation/TopCommandBar";
import { QuantumPanel } from "@/components/quantum/QuantumPanel";

export default function QuantumStudioPage() {
  return <CommandShell><TopCommandBar /><QuantumPanel /></CommandShell>;
}
