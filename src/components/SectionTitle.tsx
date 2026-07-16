import { cn } from "@/lib/utils";

/**
 * Two-line display heading used by every section:
 * first line solid white, second line ghost (rgba(182,180,189,0.2)).
 * Sizes per Framer variant: phone 42px, tablet 74px, laptop/desktop 90px.
 */
export function SectionTitle({
  solid,
  ghost,
  className,
}: {
  solid: string;
  ghost: string;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "w-full font-sans font-bold text-white",
        "text-[42px] leading-none tab:text-[74px] lap:text-[90px]",
        className,
      )}
    >
      {solid}
      <br />
      <span className="text-ghost">{ghost}</span>
    </h2>
  );
}
