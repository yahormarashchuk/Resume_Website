import { FloatingNav } from "@/components/FloatingNav";
import { ProfileCard } from "@/components/ProfileCard";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ToolsSection } from "@/components/ToolsSection";
import { BlogSection } from "@/components/BlogSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-clip">
      <FloatingNav />
      <div className="relative w-full pt-40">
        <div className="mx-auto flex w-full max-w-none flex-col gap-10 px-5 tab:max-w-[810px] tab:px-[30px] lap:max-w-[1140px] lap:flex-row lap:items-start lap:justify-between lap:gap-0 lap:px-0">
          <div className="w-full lap:sticky lap:top-10 lap:w-[344px] lap:shrink-0">
            <ProfileCard />
          </div>
          <div className="flex w-full flex-col lap:w-[666px] desk:w-[696px]">
            <HeroSection />
            <ProjectsSection />
            <ExperienceSection />
            <ToolsSection />
            <BlogSection />
            <ContactSection />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
