import { footer } from "@/lib/content";

export function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center overflow-hidden pt-40 pb-20">
      <p className="text-base leading-[1.4] text-warmgray">
        Made by{" "}
        <a
          href={footer.madeBy.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {footer.madeBy.label}
        </a>{" "}
        | Powered by{" "}
        <a
          href={footer.poweredBy.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {footer.poweredBy.label}
        </a>
      </p>
    </footer>
  );
}
