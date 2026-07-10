import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return { title: `${post.title} — victorfiltchev_ai` };
  } catch {
    return { title: "Journal — victorfiltchev_ai" };
  }
}

export default async function JournalPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <article className="max-w-2xl mx-auto px-6 py-20">
      <p className="font-mono text-xs text-muted mb-2">{post!.date}</p>
      <h1 className="text-3xl font-semibold tracking-tight mb-8">{post!.title}</h1>
      <div className="prose-journal">
        <MDXRemote source={post!.content} />
      </div>
    </article>
  );
}
