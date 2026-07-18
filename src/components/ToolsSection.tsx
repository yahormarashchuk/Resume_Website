import Image from "next/image";

import { SectionTitle } from "@/components/SectionTitle";
import { tools } from "@/lib/content";

export function ToolsSection() {
  return (
    <section id="tools" className="flex w-full flex-col gap-5 pt-[120px]">
      <SectionTitle solid="SKILLS &" ghost="TECHNOLOGY" />
      <div className="grid grid-cols-1 gap-2.5 tab:grid-cols-3 lap:grid-cols-2">
        {tools.map((tool) => (
          <a
            key={tool.name}
            href={tool.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[92px] items-center gap-4 overflow-hidden rounded-lg p-4"
          >
            <Image
              src={tool.image}
              alt={tool.name}
              width={60}
              height={60}
              className="size-[60px] rounded-lg"
            />
            <div className="flex flex-col gap-1">
              <h3 className="text-2xl font-semibold leading-[1.2] text-white">{tool.name}</h3>
              <p className="text-base leading-[1.4] text-warmgray">{tool.category}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
