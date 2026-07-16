import type { ComponentType, SVGProps } from "react";
import {
  BriefcaseIcon,
  EditIcon,
  FolderIcon,
  HomeIcon,
  ToolIcon,
} from "@/components/icons";
import { navItems } from "@/lib/content";
import type { NavItem } from "@/types/content";

const NAV_ICONS: Record<NavItem["icon"], ComponentType<SVGProps<SVGSVGElement>>> = {
  home: HomeIcon,
  folder: FolderIcon,
  briefcase: BriefcaseIcon,
  tool: ToolIcon,
  edit: EditIcon,
};

export function FloatingNav() {
  return (
    <nav
      className="absolute left-1/2 top-[30px] z-10 flex h-12 w-[292px] -translate-x-1/2 animate-fade-in flex-row items-center justify-center gap-[18px] rounded-2xl bg-white/[0.03] px-5"
      style={{ animationDelay: "1s" }}
    >
      {navItems.map((item) => {
        const Icon = NAV_ICONS[item.icon];
        return (
          <a
            key={item.label}
            href={item.href}
            aria-label={item.label}
            className="group/item relative flex size-9 cursor-pointer items-center justify-center rounded-full"
          >
            <span className="flex size-7 items-center justify-center rounded-[6px] bg-transparent p-1 transition-colors duration-200 group-hover/item:bg-white/10">
              <Icon className="size-5 text-white" />
            </span>
            <span className="pointer-events-none absolute left-1/2 top-[46px] -translate-x-1/2">
              <span className="block -translate-x-7 whitespace-nowrap rounded-lg bg-white/10 px-2.5 py-1 text-xs font-normal leading-none text-white opacity-0 transition-[opacity,transform] duration-[250ms] ease-[ease] group-hover/item:translate-x-0 group-hover/item:opacity-100">
                {item.label}
              </span>
            </span>
          </a>
        );
      })}
    </nav>
  );
}
