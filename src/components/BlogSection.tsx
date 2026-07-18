import { SectionTitle } from "@/components/SectionTitle";
import { articles } from "@/lib/content";

/**
 * "Dev Thoughts" section: heading plus a static list of article summaries.
 */
export function BlogSection() {
  return (
    <section id="blog" className="flex w-full flex-col gap-5 pt-[120px]">
      <SectionTitle solid="DEV" ghost="THOUGHTS" />
      <div className="flex w-full flex-col">
        {articles.map((a) => (
          <article
            key={a.title}
            className="relative flex w-full flex-col items-start gap-5 overflow-hidden rounded-2xl px-4 py-[30px]"
          >
            <div className="flex max-w-[480px] flex-col gap-3.5">
              <h3 className="text-[26px] font-semibold leading-[1.2] text-white">
                {a.title}
              </h3>
              <p className="text-base leading-[1.4] text-warmgray">{a.excerpt}</p>
            </div>
            <p className="text-sm font-medium uppercase tracking-[0.08em] text-orange">{a.meta}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
