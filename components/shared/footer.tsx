import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">© 2026 Lexis Intelligence. Todos os direitos reservados.</p>
        <Link href="/" className="text-xs text-muted-foreground hover:text-foreground transition">
          Voltar à página principal
        </Link>
      </div>
    </footer>
  );
}
