export default function Footer() {
  return (
    <footer className="border-t border-border/60 mt-auto">
      <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-muted">
        <span>&copy; {new Date().getFullYear()} Victor Filtchev</span>
        <div className="flex gap-5">
          <a href="https://github.com/Victorchatter" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
            github
          </a>
          <a href="https://korrin.eu" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
            korrin
          </a>
          <a href="https://orvexisiv.com" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
            orvexis iv
          </a>
        </div>
      </div>
    </footer>
  );
}
