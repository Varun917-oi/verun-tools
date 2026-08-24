"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Tool } from "@/data/tools";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const Icon = tool.icon;

  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
    >
      {tool.popular && (
        <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white/40">
          Popular
        </span>
      )}

      <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
        <Icon size={20} className="text-white/70" />
      </div>

      <h3 className="font-medium text-white">{tool.name}</h3>

      <p className="mt-2 min-h-[48px] text-sm leading-6 text-white/40">
        {tool.description}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm text-white/30 transition group-hover:text-white/70">
          Open tool
        </span>

        <ArrowUpRight
          size={17}
          className="text-white/20 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/70"
        />
      </div>
    </Link>
  );
}