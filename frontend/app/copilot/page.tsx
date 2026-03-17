"use client";

import { FormEvent, useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { GlassCard } from "@/components/primitives/GlassCard";
import { Button } from "@/components/primitives/Button";

type Message = { role: "user" | "assistant"; text: string };

const starters = [
  "How can I cut tonight's peak cost?",
  "What should I run after 10 PM?",
  "How does Q# powered optimization help me?",
];

function respond(input: string) {
  const lower = input.toLowerCase();
  if (lower.includes("peak")) {
    return "Try shifting EV charging and dishwasher cycles after 10 PM; this usually trims peak-hour cost while maintaining comfort.";
  }
  if (lower.includes("q#") || lower.includes("quantum")) {
    return "Gridiant uses a Q# powered scheduling layer for hard timing conflicts, then returns an easy daily plan with reliable fallback behavior.";
  }
  if (lower.includes("solar") || lower.includes("battery")) {
    return "Use solar-heavy hours for pre-cooling and battery charging, then reserve battery discharge for evening peaks.";
  }
  return "I can help with savings, schedules, comfort, devices, and quantum-inspired optimization strategies tailored to your home profile.";
}

export default function CopilotPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: "Hi, I’m your Gridiant Copilot. Ask me anything about savings, schedules, devices, or quantum-powered optimization." },
  ]);
  const [text, setText] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    const userText = text.trim();
    setMessages((prev) => [...prev, { role: "user", text: userText }, { role: "assistant", text: respond(userText) }]);
    setText("");
  };

  return (
    <AppShell title="Copilot" subtitle="Friendly expert guidance for your home energy strategy.">
      <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <GlassCard className="p-5">
          <div className="space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`rounded-xl border p-3 text-sm ${m.role === "assistant" ? "border-white/10 bg-white/[0.03] text-iceMist" : "border-cyan-300/30 bg-cyan-300/8 text-cyan-100"}`}>
                {m.text}
              </div>
            ))}
          </div>
          <form onSubmit={submit} className="mt-4 flex gap-2">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Ask about savings, schedules, appliances, or quantum optimization..."
              className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-3 py-2 text-sm text-iceMist outline-none placeholder:text-slateAsh"
            />
            <Button className="shrink-0">Send</Button>
          </form>
        </GlassCard>
        <GlassCard className="p-5">
          <h3 className="text-lg font-semibold text-iceMist">Quick prompts</h3>
          <div className="mt-3 space-y-2">
            {starters.map((s) => (
              <button
                key={s}
                onClick={() => setText(s)}
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] p-3 text-left text-sm text-slateAsh hover:text-iceMist"
              >
                {s}
              </button>
            ))}
          </div>
        </GlassCard>
      </div>
    </AppShell>
  );
}
