import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import { CtaBand, PageHero } from "@/components/Sections";
import { photos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Moments from reading circles, word games and classes at GoldAcres Learning Center.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments of discovery."
        intro="Reading circles, word-building games, outdoor sessions and plenty of smiles. A glimpse of everyday life at GoldAcres."
        image="/IMG-16.jpg"
      />
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <GalleryGrid photos={photos} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
