import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Journal — victorfiltchev_ai",
};

export default function JournalIndex() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <p className="font-mono text-accent text-sm mb-3">// journal</p>
      <h1 className="text-3xl font-semibold tracking-tight mb-10">Writing</h1>
      <div className="flex flex-col divide-y divide-border">
        {posts.map((p) => (
          <Link key={p.slug} href={`/journal/${p.slug}`} className="py-6 group block">
            <p className="font-mono text-xs text-muted mb-1">{p.date}</p>
            <p className="text-xl group-hover:text-accent transition-colors">{p.title}</p>
            <p className="text-sm text-muted mt-1 leading-relaxed">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
