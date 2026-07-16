import Image from "next/image";
import { HoverArrow } from "@/components/HoverArrow";
import { LayersIcon, LayoutIcon } from "@/components/icons";
import { hero, heroCards, stats } from "@/lib/content";

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

      <div className="flex flex-row items-center gap-10">
        {stats.map((stat) => (
          <div key={stat.value} className="flex flex-col">
            <p className="text-[70px] font-semibold leading-[1.2] tracking-[-0.7px] text-white">
              {stat.value}
            </p>
            {stat.lines.map((line) => (
              <p key={line} className="text-base leading-[1.2] tracking-[-0.16px] text-warmgray">
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-5 lap:h-[260px] lap:flex-row">
        <a
          href={heroCards.orange.href}
          className="group relative flex h-[212px] w-full flex-col items-start gap-6 overflow-hidden rounded-[10px] bg-orange px-5 pb-[22px] pt-10 lap:h-[260px] lap:w-[260px] lap:shrink-0"
        >
          <Image
            src="/images/doodles/orange-line-a.svg"
            alt=""
            aria-hidden
            width={388}
            height={155}
            className="absolute -left-[58px] -top-[57px] max-w-none"
          />
          <Image
            src="/images/doodles/orange-line-b.svg"
            alt=""
            aria-hidden
            width={388}
            height={155}
            className="absolute -left-[54px] top-[106px] max-w-none"
          />
          <LayersIcon className="relative z-10 h-[41px] w-[38px] text-white" strokeWidth={2} />
          <div className="relative z-10 flex w-full flex-1 flex-col items-end justify-between">
            <p className="max-w-[220px] self-start text-2xl font-medium leading-[1.1] text-white">
              {heroCards.orange.text}
            </p>
            <span className="flex size-8 items-center justify-center rounded-[6px]">
              <HoverArrow className="text-white" />
            </span>
          </div>
        </a>

        <a
          href={heroCards.lime.href}
          className="group relative flex h-[212px] w-full flex-col items-start gap-6 overflow-hidden rounded-[10px] bg-lime px-5 pb-[22px] pt-10 lap:h-[260px] lap:flex-1"
        >
          <Image
            src="/images/doodles/lime-line.svg"
            alt=""
            aria-hidden
            width={422}
            height={284}
            className="absolute -right-[36px] -top-[60px] max-w-none"
          />
          <Image
            src="/images/doodles/lime-line.svg"
            alt=""
            aria-hidden
            width={422}
            height={284}
            className="absolute -left-[36px] top-[166px] max-w-none rotate-[4deg]"
          />
          <LayoutIcon className="relative z-10 h-[41px] w-[38px] text-page" strokeWidth={2} />
          <div className="relative z-10 flex w-full flex-1 flex-col items-end justify-between">
            <p className="max-w-[346px] self-start text-2xl font-medium leading-[1.1] text-page">
              {heroCards.lime.text}
            </p>
            <span className="flex size-8 items-center justify-center rounded-[6px]">
              <HoverArrow className="text-page" />
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
