import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

const links = [
  {
    label: "GitHub — engramkit",
    href: "https://github.com/Victorchatter/engramkit",
    desc: "Persistent memory system for AI agents.",
  },
  {
    label: "Korrin",
    href: "https://korrin.eu",
    desc: "Autonomous pipeline company for cyber vendors.",
  },
  {
    label: "Orvexis IV",
    href: "https://orvexisiv.com",
    desc: "Client site builds and web studio.",
  },
];

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-6">
      <section className="py-24 sm:py-32">
        <p className="font-mono text-accent text-sm mb-4">// victorfiltchev_ai</p>
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight max-w-2xl">
          Solo founder &amp; builder mastering agentic AI workflows.
        </h1>
        <p className="mt-5 text-muted max-w-xl leading-relaxed">
          I design and ship software with fleets of AI agents — SaaS products, client sites,
          and trading systems. This is where I write about what actually works.
        </p>
      </section>

      <section className="pb-20">
        <h2 className="font-mono text-sm text-muted mb-5">projects</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="group border border-border rounded-lg p-5 hover:border-accent/60 transition-colors"
            >
              <p className="font-mono text-sm text-foreground group-hover:text-accent transition-colors">
                {l.label}
              </p>
              <p className="text-xs text-muted mt-2 leading-relaxed">{l.desc}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="pb-32">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-mono text-sm text-muted">latest from the journal</h2>
          <Link href="/journal" className="font-mono text-xs text-accent hover:underline">
            view all →
          </Link>
        </div>
        <div className="flex flex-col divide-y divide-border">
          {posts.map((p) => (
            <Link key={p.slug} href={`/journal/${p.slug}`} className="py-5 group block">
              <p className="font-mono text-xs text-muted mb-1">{p.date}</p>
              <p className="text-lg group-hover:text-accent transition-colors">{p.title}</p>
              <p className="text-sm text-muted mt-1 leading-relaxed">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
