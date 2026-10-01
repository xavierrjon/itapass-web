import { Ticket } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-border-subtle bg-surface/90 backdrop-blur">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-lg font-bold tracking-tight text-ink"
        >
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-white">
            <Ticket className="size-4" aria-hidden="true" />
          </span>
          ItaPass
        </Link>

        <div className="flex items-center gap-1 text-sm font-medium">
          <Link
            href="/partidas"
            className="rounded-lg px-3 py-2 text-muted transition-colors hover:bg-background hover:text-ink focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
          >
            Partidas
          </Link>
        </div>
      </nav>
    </header>
  );
}
