export const metadata = {
  title: "About — victorfiltchev_ai",
};

export default function About() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <p className="font-mono text-accent text-sm mb-3">// about</p>
      <h1 className="text-3xl font-semibold tracking-tight mb-8">Victor Filtchev</h1>
      <div className="space-y-5 text-[#c7d3d1] leading-relaxed">
        <p>
          I&apos;m a solo founder and builder. I design, ship, and run software products
          end to end — from the first line of a spec to a live product on Vercel — by
          working through fleets of AI agents rather than writing every line myself.
        </p>
        <p>
          That means running several projects in parallel: SaaS products, client sites,
          internal tools, and trading systems. The common thread is agentic workflow —
          scoping work precisely enough that AI agents can own a full slice of
          implementation, and reviewing what comes back like a founder, not a linter.
        </p>
        <p>
          I write about what actually works in that process on the{" "}
          <a href="/journal" className="text-accent hover:underline">
            journal
          </a>{" "}
          — less hype, more of what holds up in production.
        </p>
      </div>
    </div>
  );
}
