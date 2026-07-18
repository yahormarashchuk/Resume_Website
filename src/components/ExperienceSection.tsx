import { SectionTitle } from "@/components/SectionTitle";
import { HoverArrow } from "@/components/HoverArrow";
import { jobs } from "@/lib/content";

/**
 * "12 YEARS OF EXPERIENCE" section — a stacked list of job rows, each with the
 * company name, description, period, and the arrow-swap hover micro-interaction.
 */
export function ExperienceSection() {
  return (
    <section id="experience" className="flex w-full flex-col gap-5 overflow-hidden pt-[120px]">
      <SectionTitle solid="4 YEARS OF" ghost="EXPERIENCE" />
      <div className="flex w-full flex-col">
        {jobs.map((job) => (
          <div
            key={job.company}
            className="group relative flex w-full flex-col items-start gap-5 overflow-hidden rounded-2xl px-4 py-6"
          >
            <span className="absolute right-4 top-[46px]">
              <HoverArrow />
            </span>
            <div className="flex max-w-[420px] flex-col gap-3.5">
              <h3 className="text-[26px] font-semibold leading-[1.2] text-white">{job.company}</h3>
              <p className="text-base leading-[1.4] text-warmgray">{job.description}</p>
            </div>
            <p className="text-base leading-[1.1] text-warmgray">{job.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
