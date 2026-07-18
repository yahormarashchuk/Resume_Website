import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle";
import { projects } from "@/lib/content";

/**
 * "RECENT PROJECTS" section with linked thumbnail, title, and subtitle rows.
 */
export function ProjectsSection() {
  return (
    <section id="projects" className="flex w-full flex-col gap-5 pt-[120px]">
      <SectionTitle solid="RECENT" ghost="PROJECTS" />
      <div className="flex w-full flex-col">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            className="relative flex w-full items-center justify-between overflow-hidden rounded-2xl px-4 py-5"
          >
            <div className="flex flex-row items-center gap-5">
              <Image
                src={project.image}
                alt={project.title}
                width={130}
                height={135}
                className="h-[135px] w-[130px] rounded-lg object-cover"
              />
              <div className="flex max-w-[420px] flex-col gap-1">
                <h3 className="text-[26px] font-semibold leading-[1.2] text-white">{project.title}</h3>
                <p className="text-base leading-[1.4] text-warmgray">{project.subtitle}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
