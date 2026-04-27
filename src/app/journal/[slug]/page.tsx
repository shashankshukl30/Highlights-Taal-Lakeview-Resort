import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Balancer from "react-wrap-balancer";
import { journalPosts, getJournalPostBySlug } from "@/content/journal";
import { formatDateLong } from "@/lib/utils";

export async function generateStaticParams() {
  return journalPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getJournalPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.cover],
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function JournalPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getJournalPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <section className="pt-36 md:pt-44 pb-12">
        <div className="container-narrow text-center">
          <div className="flex items-center justify-center gap-3 text-[11.5px] tracking-[0.14em] uppercase text-ash mb-5">
            <span className="chip chip-foliage">{post.category}</span>
            <span>{formatDateLong(post.date)}</span>
            <span className="opacity-50">·</span>
            <span>{post.readMin} min read</span>
          </div>
          <h1 className="font-display text-[36px] md:text-[52px] lg:text-[64px] leading-[1.05] tracking-[-0.02em]">
            <Balancer>{post.title}</Balancer>
          </h1>
        </div>
      </section>

      <div className="container-wide">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-12 md:mb-16">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      <section className="pb-24">
        <div className="prose-article">
          {post.body.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <section className="surface-cream py-20">
        <div className="container-wide">
          <p className="eyebrow text-center">Read another</p>
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {journalPosts
              .filter((p) => p.slug !== post.slug)
              .map((p) => (
                <Link key={p.slug} href={`/journal/${p.slug}`} className="card-editorial group">
                  <div className="media">
                    <Image
                      src={p.cover}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="pt-5">
                    <p className="text-[11.5px] tracking-[0.14em] uppercase text-ash mb-3">
                      {p.category}
                    </p>
                    <h3 className="font-display text-[24px] tracking-[-0.015em] leading-[1.15] group-hover:text-sunset transition-colors">
                      <Balancer>{p.title}</Balancer>
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
