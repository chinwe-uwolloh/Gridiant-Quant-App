import { ReactNode } from "react";

export function CommandShell({ children }: { children: ReactNode }) {
  return <main className="mx-auto max-w-[1500px] px-6 py-8 md:px-10">{children}</main>;
}
