import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Audience } from "@/components/sections/audience";
import { CtaBand } from "@/components/sections/cta-band";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { TheProblem } from "@/components/sections/the-problem";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { SITE } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  knowsAbout: [
    "Meta advertising for wellness retreats",
    "Retreat marketing",
    "Spiritual coaching marketing",
    "Audience building and retargeting",
  ],
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <TheProblem />
        <WhatWeDo />
        <Process />
        <Services />
        <Audience />
        <CtaBand />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
