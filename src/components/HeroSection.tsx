import { CarFront, Layers3, MapPin, PanelsTopLeft, type LucideIcon } from "lucide-react";
import { hero, heroCards, stats } from "@/lib/content";

type HeroCardStyle = {
  background: string;
  rail: string;
  icon: LucideIcon;
  text: string;
  chip: string;
};

const cardStyles: Record<(typeof heroCards)[number]["icon"], HeroCardStyle> = {
  layers: {
    background: "bg-[#5140d9]",
    rail: "bg-white/10",
    icon: Layers3,
    text: "text-white",
    chip: "bg-white/15 text-white",
  },
  stack: {
    background: "bg-[#22bfd4]",
    rail: "bg-black/[0.06]",
    icon: PanelsTopLeft,
    text: "text-[#07111f]",
    chip: "bg-black/[0.08] text-[#07111f]",
  },
  car: {
    background: "bg-[#4f46e5]",
    rail: "bg-white/10",
    icon: CarFront,
    text: "text-white",
    chip: "bg-white/15 text-white",
  },
  location: {
    background: "bg-[#e851a5]",
    rail: "bg-white/15",
    icon: MapPin,
    text: "text-white",
    chip: "bg-white/15 text-white",
  },
};

export function HeroSection() {
  return (
    <section className="flex w-full animate-fade-in flex-col gap-[70px] tab:gap-[60px]">
      <div className="flex flex-col gap-2.5">
        <h1 className="text-[52px] font-bold leading-none text-white tab:text-[86px] lap:text-[94px] desk:text-[110px]">
          {hero.titleSolid}
          <br />
          <span className="text-ghost">{hero.titleGhost}</span>
        </h1>
        <p className="max-w-[480px] text-lg leading-[1.4] text-warmgray">{hero.intro}</p>
      </div>

      <div className="grid w-full grid-cols-3 gap-3 tab:flex tab:flex-row tab:items-center tab:gap-10">
        {stats.map((stat) => (
          <div key={stat.value} className="flex min-w-0 flex-col">
            <p className="text-[42px] font-semibold leading-[1.2] tracking-[-0.7px] text-white tab:text-[70px]">
              {stat.value}
            </p>
            {stat.lines.map((line) => (
              <p key={line} className="text-xs leading-[1.2] tracking-[-0.16px] text-warmgray tab:text-base">
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 tab:grid-cols-2">
        {heroCards.map((card) => {
          const styles = cardStyles[card.icon];
          const Icon = styles.icon;

          return (
            <a
              key={card.eyebrow}
              href={card.href}
              className={`group relative flex min-h-[180px] overflow-hidden rounded-[20px] transition-transform duration-300 hover:-translate-y-1 ${styles.background} ${styles.text}`}
            >
              <div className={`flex w-[60px] shrink-0 items-center justify-center ${styles.rail}`}>
                <Icon aria-hidden className="size-6 transition-transform duration-300 group-hover:scale-110" strokeWidth={2.5} />
              </div>
              <div className="flex min-w-0 flex-1 flex-col px-5 py-5">
                <p className="text-[11px] font-semibold uppercase leading-none tracking-[0.12em] opacity-60">
                  {card.eyebrow}
                </p>
                <p className="mt-2 text-[21px] font-semibold leading-tight">{card.title}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full px-3 py-1 text-xs font-semibold leading-none ${styles.chip}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
