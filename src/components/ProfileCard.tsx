import Image from "next/image";
import { SocialGlyph } from "@/components/icons";
import { profile, profileSocials } from "@/lib/content";

export function ProfileCard() {
  return (
    <div className="animate-fade-in relative flex w-full flex-col items-center gap-6 overflow-hidden rounded-2xl bg-white px-5 py-[30px] lap:h-[640px] lap:w-[344px]">
      <Image
        src={profile.photo}
        alt={profile.name}
        width={240}
        height={284}
        priority
        unoptimized
        sizes="240px"
        className="h-[284px] w-[240px] rounded-2xl object-cover"
      />
      <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-between">
        <p className="text-center text-4xl leading-[1.1] font-bold tracking-[-1.44px] text-black">
          {profile.name}
        </p>
        <div className="flex flex-col items-center gap-[30px]">
          <p className="max-w-[300px] text-center text-lg leading-[1.1] font-medium text-gray-mid">
            {profile.bio}
          </p>
          <div className="flex flex-row justify-center gap-4">
            {profileSocials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex size-9 items-center justify-center rounded-[6px] p-1.5"
              >
                <SocialGlyph name={social.icon} className="bg-orange" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
