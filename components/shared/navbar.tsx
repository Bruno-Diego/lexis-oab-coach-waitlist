"use client";

import Link from "next/link";
import { Scale } from "lucide-react";

export function Navbar() {
  return (
    <div className="sticky top-0 z-30 px-6 py-4 lg:px-10">
      <header className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[rgba(16,20,21,0.88)] px-6 py-3.5 backdrop-blur-xl shadow-sm">
        <Link href="/waitlist" className="group flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-yellow-400 to-amber-600 transition group-hover:shadow-lg group-hover:shadow-yellow-500/30">
            <Scale className="h-4 w-4 text-slate-900" />
          </div>
          <div>
            <p className="font-mono text-xs font-bold uppercase leading-none tracking-[0.35em] text-primary">
              Lexis
            </p>
            <p className="mt-0.5 text-xs leading-none text-muted-foreground">
              Assistente de Estudos para a OAB
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <Link
            href="/sobre"
            className="rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
          >
            Sobre
          </Link>
          <Link
            href="/waitlist"
            className="ml-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-300 transition hover:bg-yellow-500/20"
          >
            Lista de espera
          </Link>
        </nav>

      </header>
    </div>
  );
}
