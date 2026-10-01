import { ArrowRight, QrCode, ShieldCheck, Ticket } from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    icon: Ticket,
    title: "Ingressos com QR Code",
    description:
      "Cada ingresso tem identificador único e é apresentado por QR Code na entrada.",
  },
  {
    icon: ShieldCheck,
    title: "Validação no servidor",
    description:
      "A verificação acontece no backend, que é a única fonte de verdade do ingresso.",
  },
  {
    icon: QrCode,
    title: "Um ingresso, um uso",
    description:
      "Ingresso validado não pode ser reutilizado em uma segunda entrada.",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-border-subtle bg-surface">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            ItaPass
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Ingressos para partidas, do cadastro à validação
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted">
            Encontre a partida, compre seu ingresso e apresente o QR Code na
            entrada. Simples para o torcedor, controlado para o organizador.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/partidas"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Ver partidas
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-ink">
          Como funciona
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {highlights.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-border-subtle bg-surface p-6"
            >
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary-soft text-primary">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm text-muted">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
