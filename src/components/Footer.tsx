import { MailIcon, SocialGlyph } from "@/components/icons";
import { footer } from "@/lib/content";

export function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-[30px] overflow-hidden pt-40 pb-20">
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
      <div className="flex flex-row items-center gap-4">
        {footer.socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-9 items-center justify-center rounded-[6px]"
          >
            {social.icon === "mail" ? (
              <MailIcon className="size-6 text-orange" strokeWidth={2} />
            ) : (
              <SocialGlyph name={social.icon} className="bg-orange" />
            )}
          </a>
        ))}
      </div>
    </footer>
  );
}
