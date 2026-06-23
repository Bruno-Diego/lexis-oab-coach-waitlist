"use client";

import { useState } from "react";
import { ChevronRight, CheckCircle, Map, ClipboardList, ScrollText, Brain } from "lucide-react";
import { NavbarMinimal } from "@/components/shared/navbar-minimal";

const areas = [
  "Direito Administrativo",
  "Direito Civil",
  "Direito Constitucional",
  "Direito do Trabalho",
  "Direito Empresarial",
  "Direito Penal",
  "Direito Tributário",
];

const benefits = [
  {
    icon: Map,
    title: "Mapa de alto rendimento por especialidade",
    description: "Saiba exatamente o que cai na sua área — com padrões das últimas provas e previsão do próximo exame.",
  },
  {
    icon: ClipboardList,
    title: "Log de erros com repetição espaçada",
    description: "Seus erros categorizados e convertidos em revisão inteligente. Estude menos, retenha mais.",
  },
  {
    icon: ScrollText,
    title: "Framework de peças e dissertativas",
    description: "Templates estruturados com rubrica OAB ponto a ponto. Saiba como pontuar antes de escrever.",
  },
  {
    icon: Brain,
    title: "Questões e simulados com gabarito comentado",
    description: "Prática com questões reais da 1ª fase e simulados completos da 2ª fase por especialidade.",
  },
];

type FormState = "idle" | "loading" | "success" | "duplicate" | "error";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [position, setPosition] = useState<number | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setFormState("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
      });
      const data = await res.json();

      if (res.status === 201) {
        setPosition(data.position);
        setFormState("success");
      } else if (res.status === 200 && data.duplicate) {
        setPosition(data.position);
        setFormState("duplicate");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  return (
    <>
      <NavbarMinimal />
      <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,204,51,0.12),_transparent_55%),radial-gradient(ellipse_at_bottom_left,_rgba(0,35,78,0.4),_transparent_40%)]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-4xl px-6 pt-12 pb-20 text-center lg:px-10">

          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-5 py-2 mb-8">
            <span className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-yellow-300">
              Lançamento em breve · Vagas limitadas
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-white mb-6">
            O coach de IA para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">
              passar na OAB
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
            Questões, peças, dissertativas e simulados com método, rubrica e análise das últimas provas oficiais — tudo adaptado à sua especialidade de 2ª fase.
          </p>

          {/* Free trial callout */}
          <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 mb-10">
            <CheckCircle className="w-4 h-4 text-yellow-400 shrink-0" />
            <p className="text-sm text-muted-foreground">
              <span className="text-white font-semibold">Os primeiros 20 inscritos</span> ganham acesso gratuito por tempo limitado quando a plataforma for lançada.
            </p>
          </div>

          {/* Signup Form */}
          {formState === "success" || formState === "duplicate" ? (
            <div className="mx-auto max-w-md rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-8 text-center">
              <div className="text-4xl mb-3">🎉</div>
              {formState === "success" ? (
                <>
                  <p className="text-xl font-bold text-white mb-2">Você está na lista!</p>
                  <p className="text-muted-foreground text-sm">
                    {position && position <= 20 ? (
                      <>Você é o <span className="text-yellow-300 font-bold">#{position}</span> da fila — dentro dos primeiros 20. Seu trial gratuito está garantido.</>
                    ) : (
                      <>Você é o <span className="text-yellow-300 font-bold">#{position}</span> da fila. Avisaremos assim que a plataforma for lançada.</>
                    )}
                  </p>
                </>
              ) : (
                <>
                  <p className="text-xl font-bold text-white mb-2">Você já está inscrito!</p>
                  <p className="text-muted-foreground text-sm">
                    Esse email já está na fila na posição <span className="text-yellow-300 font-bold">#{position}</span>. Avisaremos no lançamento.
                  </p>
                </>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={formState === "loading"}
                  className="flex-1 rounded-lg border border-white/15 bg-white/[0.06] px-4 py-3.5 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-yellow-400/50 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-yellow-400 to-amber-600 px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:shadow-lg hover:shadow-yellow-500/30 disabled:opacity-60 whitespace-nowrap"
                >
                  {formState === "loading" ? "Inscrevendo…" : (
                    <>Garantir minha vaga <ChevronRight className="w-4 h-4" /></>
                  )}
                </button>
              </div>
              {formState === "error" && (
                <p className="text-sm text-red-400">Algo deu errado. Tente novamente.</p>
              )}
              <p className="text-xs text-muted-foreground">
                Sem spam. Avisamos apenas no lançamento.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Social proof bar */}
      <div className="border-y border-white/10 py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
            <span>✓ 20 disciplinas obrigatórias na 1ª fase</span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span>✓ 7 áreas de especialidade na 2ª fase</span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span>✓ Provas oficiais indexadas</span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span>✓ Método: Questões → Revisão → Simulado</span>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-xs font-mono uppercase tracking-widest text-yellow-400 mb-3">O que você terá acesso</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Feito para quem quer passar,<br className="hidden md:block" /> não apenas estudar
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="flex gap-5 rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
                  <div className="h-11 w-11 shrink-0 rounded-lg bg-gradient-to-br from-yellow-400/20 to-amber-600/20 flex items-center justify-center mt-0.5">
                    <Icon className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{b.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Areas covered */}
      <section className="border-t border-white/10 py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-yellow-400 mb-4">Especialidades cobertas</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {areas.map((area) => (
              <span key={area} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-muted-foreground">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative border-t border-white/10 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-yellow-500/5" />
        <div className="relative mx-auto max-w-2xl px-6 lg:px-10 text-center">
          <p className="text-3xl md:text-4xl font-bold text-white mb-4">
            As primeiras 20 vagas poderão garantir acesso antecipado e trial gratuito.
          </p>
          <p className="text-muted-foreground mb-8">
            Inscreva-se agora e garanta trial completo quando a plataforma for lançada.
          </p>
          {formState !== "success" && formState !== "duplicate" && (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={formState === "loading"}
                className="flex-1 rounded-lg border border-white/15 bg-white/[0.06] px-4 py-3.5 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-yellow-400/50 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={formState === "loading"}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-yellow-400 to-amber-600 px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:shadow-lg hover:shadow-yellow-500/30 disabled:opacity-60 whitespace-nowrap"
              >
                {formState === "loading" ? "…" : "Garantir minha vaga"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">© 2026 Lexis Intelligence. Todos os direitos reservados.</p>
        </div>
      </footer>
      </main>
    </>
  );
}
