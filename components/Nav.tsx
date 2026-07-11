import Link from "next/link";

export default function Nav() {
  return (
    <header className="border-b border-border/60">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-5 font-mono text-sm">
        <Link href="/" className="text-foreground tracking-tight">
          victorfiltchev<span className="text-accent">_ai</span>
        </Link>
        <a
          href="https://github.com/Victorchatter"
          target="_blank"
          rel="noreferrer"
          className="text-muted hover:text-accent transition-colors"
        >
          github
        </a>
      </div>
    </header>
  );
}
