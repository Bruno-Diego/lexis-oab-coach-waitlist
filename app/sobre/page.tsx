import { NavbarMinimal } from "@/components/shared/navbar-minimal";

export default function SobrePage() {
  return (
    <>
      <NavbarMinimal />
      <main className="relative min-h-screen overflow-hidden px-6 py-16 text-foreground lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,204,51,0.12),_transparent_36%),radial-gradient(circle_at_bottom_left,_rgba(0,35,78,0.42),_transparent_34%)]" />

        <div className="relative mx-auto max-w-6xl space-y-8">
          <section className="rounded-[2rem] border border-white/10 bg-[rgba(29,32,34,0.84)] p-8 shadow-2xl backdrop-blur-2xl lg:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">Sobre o projeto</p>
            <div className="mt-4 grid gap-8 lg:grid-cols-[1.4fr_0.9fr] lg:items-center">
              <div>
                <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
                  Um assistente de estudo pensado para a aprovação na OAB, não para conteúdo genérico.
                </h1>
                <p className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                  O Lexis foi criado para organizar a preparação em torno do que realmente importa: 20 disciplinas obrigatórias da 1ª fase, treino guiado da 2ª fase por área escolhida, revisão dos erros e simulados com base no histórico de provas oficiais.
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                  Em vez de depender de aulas longas e conteúdo disperso, a plataforma transforma o estudo em um ciclo prático e orientado por IA: diagnosticar, direcionar, treinar e revisar. A mesma IA atua como coach para as duas fases, mas aprofunda a 2ª fase quando o usuário seleciona a sua área.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">1ª fase</p>
                  <p className="mt-2 text-3xl font-bold text-yellow-300">20</p>
                  <p className="mt-2 text-sm text-muted-foreground">disciplinas obrigatórias trabalhadas em paralelo.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">2ª fase</p>
                  <p className="mt-2 text-3xl font-bold text-yellow-300">7</p>
                  <p className="mt-2 text-sm text-muted-foreground">áreas de especialidade com foco na escolhida pelo usuário.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Base histórica</p>
                  <p className="mt-2 text-3xl font-bold text-yellow-300">5</p>
                  <p className="mt-2 text-sm text-muted-foreground">anos de provas indexadas para orientar treino e revisão.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Método</p>
                  <p className="mt-2 text-3xl font-bold text-yellow-300">4</p>
                  <p className="mt-2 text-sm text-muted-foreground">etapas: questões, peças/dissertativas, revisão e simulado.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-[1.75rem] border border-white/10 bg-[rgba(18,22,24,0.82)] p-7 shadow-xl backdrop-blur-xl">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Missão</p>
              <h2 className="mt-3 text-2xl font-bold text-white">Reduzir ruído e aumentar retenção.</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                A plataforma prioriza sessões curtas, diagnósticos objetivos e reforço dos pontos fracos. O objetivo é fazer o aluno estudar com mais intenção e menos dispersão, cobrindo 20 disciplinas na 1ª fase e aprofundando a 2ª fase pela área escolhida.
              </p>
            </article>

            <article className="rounded-[1.75rem] border border-white/10 bg-[rgba(18,22,24,0.82)] p-7 shadow-xl backdrop-blur-xl">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">O que entrega</p>
              <h2 className="mt-3 text-2xl font-bold text-white">Plano, prática e revisão no mesmo fluxo.</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Cada conversa pode gerar plano semanal, mapa de alto rendimento, log de erros, framework de peça, técnicas de memória e simulado adaptado à rotina do usuário. Na 2ª fase, a sessão é mais direcionada à área escolhida.
              </p>
            </article>

            <article className="rounded-[1.75rem] border border-white/10 bg-[rgba(18,22,24,0.82)] p-7 shadow-xl backdrop-blur-xl">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Para quem é</p>
              <h2 className="mt-3 text-2xl font-bold text-white">Quem quer passar com método.</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                É pensado para quem precisa organizar a rotina de estudos, cobrir as 20 disciplinas da 1ª fase, atacar a 2ª fase com segurança e transformar erros recorrentes em revisão de longo prazo.
              </p>
            </article>
          </section>

          <section className="grid gap-6 rounded-[2rem] border border-white/10 bg-[rgba(29,32,34,0.84)] p-8 shadow-2xl backdrop-blur-2xl lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">Como funciona</p>
              <h2 className="mt-4 text-3xl font-bold text-white">Um ciclo de estudo simples, repetível e orientado por resultado.</h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
                <p><span className="text-white">1. Questões:</span> o sistema começa pela prática da 1ª fase, cobrindo as 20 disciplinas obrigatórias com foco em tema, base legal e padrão de cobrança.</p>
                <p><span className="text-white">2. Peças e dissertativas:</span> a 2ª fase ganha templates, estrutura e feedback ponto a ponto, sempre direcionados à área escolhida.</p>
                <p><span className="text-white">3. Revisão:</span> os erros são classificados e revisitados com repetição espaçada para evitar esquecimento.</p>
                <p><span className="text-white">4. Simulado:</span> a jornada fecha com prova completa para medir evolução e ajustar a próxima sessão.</p>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-yellow-500/20 bg-yellow-500/5 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-yellow-300">Diferenciais</p>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground">
                <li><span className="text-white">•</span> Foco em questões e simulados, não em videoaulas longas.</li>
                <li><span className="text-white">•</span> Especialidades do Direito organizadas para a 2ª fase, com foco na escolhida pelo usuário.</li>
                <li><span className="text-white">•</span> Histórico de provas para orientar o que estudar primeiro.</li>
                <li><span className="text-white">•</span> Experiência visual sóbria, com leitura confortável para sessões longas.</li>
              </ul>
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm font-semibold text-white">Quer acompanhar o lançamento?</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Entre na lista de espera e receba acesso antecipado quando a plataforma abrir.
                </p>
                <a
                  href="/waitlist"
                  className="mt-4 inline-flex rounded-full bg-gradient-to-r from-yellow-400 to-amber-600 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:shadow-lg hover:shadow-yellow-500/30"
                >
                  Ir para a waitlist
                </a>
              </div>
            </div>
          </section>
        </div>

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
