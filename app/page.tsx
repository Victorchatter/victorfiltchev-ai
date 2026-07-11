import Link from "next/link";

const buttons = [
  { label: "Journal", desc: "Writing on agentic AI workflows", href: "/journal", internal: true },
  { label: "About", desc: "Who I am, what I build", href: "/about", internal: true },
  { label: "GitHub — engramkit", desc: "Persistent memory system for AI agents", href: "https://github.com/Victorchatter/engramkit" },
  { label: "Korrin", desc: "Autonomous pipeline company for cyber vendors", href: "https://korrin.eu" },
  { label: "Orvexis IV", desc: "Client site builds and web studio", href: "https://orvexisiv.com" },
];

export default function Home() {
  return (
    <div className="max-w-md mx-auto px-6 py-16 sm:py-24 flex flex-col items-center text-center">
      <div className="w-20 h-20 rounded-full bg-accent/10 border border-accent/40 flex items-center justify-center font-mono text-2xl text-accent">
        VF
      </div>

      <h1 className="mt-5 text-xl font-semibold tracking-tight">Victor Filtchev</h1>
      <p className="font-mono text-accent text-xs mt-1">victorfiltchev_ai</p>
      <p className="mt-4 text-sm text-muted leading-relaxed max-w-xs">
        Solo founder &amp; builder mastering agentic AI workflows. Shipping software with
        fleets of AI agents.
      </p>

      <div className="mt-10 w-full flex flex-col gap-3">
        {buttons.map((b) =>
          b.internal ? (
            <Link
              key={b.href}
              href={b.href}
              className="group w-full border border-border rounded-xl px-5 py-4 hover:border-accent/60 transition-colors"
            >
              <p className="font-mono text-sm group-hover:text-accent transition-colors">
                {b.label}
              </p>
              <p className="text-xs text-muted mt-1">{b.desc}</p>
            </Link>
          ) : (
            <a
              key={b.href}
              href={b.href}
              target="_blank"
              rel="noreferrer"
              className="group w-full border border-border rounded-xl px-5 py-4 hover:border-accent/60 transition-colors"
            >
              <p className="font-mono text-sm group-hover:text-accent transition-colors">
                {b.label}
              </p>
              <p className="text-xs text-muted mt-1">{b.desc}</p>
            </a>
          )
        )}
      </div>
    </div>
  );
}
