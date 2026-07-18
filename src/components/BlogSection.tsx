import { SectionTitle } from "@/components/SectionTitle";
import { HoverArrow } from "@/components/HoverArrow";
import { articles } from "@/lib/content";

/**
 * "Design Thoughts" blog section: heading plus a list of article rows,
 * each with title, excerpt, date/read-time meta and the hover arrow.
 */
export function BlogSection() {
  return (
    <section id="blog" className="flex w-full flex-col gap-5 pt-[120px]">
      <SectionTitle solid="DEV" ghost="THOUGHTS" />
      <div className="flex w-full flex-col">
        {articles.map((a) => (
          <a
            key={a.title}
            href={a.href}
            className="group relative flex w-full flex-col items-start gap-5 overflow-hidden rounded-2xl px-4 py-[30px]"
          >
            <span className="absolute right-4 top-[46px]">
              <HoverArrow />
            </span>
            <div className="flex max-w-[480px] flex-col gap-3.5">
              <h3 className="text-[26px] font-semibold leading-[1.2] text-white">
                {a.title}
              </h3>
              <p className="text-base leading-[1.4] text-warmgray">{a.excerpt}</p>
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-base leading-[1.1] text-warmgray">{a.date}</p>
              <p className="text-base leading-[1.1] text-warmgray">{a.readTime}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
