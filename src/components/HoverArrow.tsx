import { cn } from "@/lib/utils";
import { ArrowForwardIcon } from "@/components/icons";

/**
 * 20px Material arrow rotated -45deg (pointing up-right), orange by default.
 * On `group` hover the arrow flies out to the top-right while a twin flies in
 * from the bottom-left (Framer arrow-swap micro-interaction).
 */
export function HoverArrow({ className }: { className?: string }) {
  return (
    <span className={cn("relative block size-5 -rotate-45 overflow-hidden text-orange", className)}>
      <ArrowForwardIcon className="absolute inset-0 size-5 transition-transform duration-300 ease-out group-hover:translate-x-[150%] group-hover:-translate-y-[150%]" />
      <ArrowForwardIcon className="absolute inset-0 size-5 -translate-x-[150%] translate-y-[150%] transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0" />
    </span>
  );
}
