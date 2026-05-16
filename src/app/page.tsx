import Hero from '@/components/home/Hero';
import AISystemsDashboard from '@/components/home/AISystemsDashboard';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import ExperienceTimeline from '@/components/home/ExperienceTimeline';
import AIConceptsPlayground from '@/components/home/AIConceptsPlayground';
import ArchitectureGallery from '@/components/home/ArchitectureGallery';
import SkillsSection from '@/components/home/SkillsSection';
import CurrentlyBuilding from '@/components/home/CurrentlyBuilding';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <AISystemsDashboard />
      <FeaturedProjects />
      <AIConceptsPlayground />
      <ArchitectureGallery />
      <ExperienceTimeline />
      <SkillsSection />
      <CurrentlyBuilding />
      <ContactSection />
    </div>
  );
}
