import { SectionTitle } from "@/components/SectionTitle";
import { jobs } from "@/lib/content";

/**
 * "4 YEARS OF EXPERIENCE" section with company, description, and period rows.
 */
export function ExperienceSection() {
  return (
    <section id="experience" className="flex w-full flex-col gap-5 overflow-hidden pt-[120px]">
      <SectionTitle solid="4 YEARS OF" ghost="EXPERIENCE" />
      <div className="flex w-full flex-col">
        {jobs.map((job) => (
          <div
            key={job.company}
            className="relative flex w-full flex-col items-start gap-6 overflow-hidden rounded-2xl px-4 py-8"
          >
            <div className="flex max-w-[540px] flex-col gap-4">
              <h3 className="text-[26px] font-semibold leading-[1.2] text-white">{job.company}</h3>
              <p className="text-base leading-[1.4] text-warmgray">{job.description}</p>
              <ul className="flex list-disc flex-col gap-2.5 pl-5 text-base leading-[1.45] text-warmgray marker:text-orange">
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-1" aria-label={`${job.company} technology stack`}>
                {job.stack.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-ghost px-2.5 py-1 text-xs leading-none text-cream"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-base leading-[1.1] text-warmgray">{job.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
