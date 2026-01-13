import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { cloudinaryUrl } from "../lib/cloudinary";
import { FadeInView } from "./animations";

interface GalleryImage {
  id: string;
  alt: string;
  category?: string;
}

interface PhotoGalleryProps {
  images: GalleryImage[];
}

// Number of images to show on mobile before "View More"
const MOBILE_INITIAL_COUNT = 5;

export default function PhotoGallery({
  images,
}: PhotoGalleryProps): React.JSX.Element {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [showAllMobile, setShowAllMobile] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const isGridInView = useInView(gridRef, { once: true, margin: "-100px" });

  const openLightbox = (index: number): void => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Prepare slides for lightbox
  const slides = images.map((image) => ({
    src: cloudinaryUrl(image.id),
    alt: image.alt,
  }));

  return (
    <section id="gallery" className="scroll-mt-8 bg-neutral-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInView className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Gallery
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
            Take a tour of our luxury mountain chalet
          </p>
        </FadeInView>

        {/* Image Grid */}
        <motion.div
          ref={gridRef}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {images.map((image, index) => {
            // On mobile (single column), hide images beyond MOBILE_INITIAL_COUNT unless expanded
            const hiddenOnMobile = !showAllMobile && index >= MOBILE_INITIAL_COUNT;

            return (
              <motion.button
                key={image.id}
                type="button"
                onClick={() => openLightbox(index)}
                className={`group relative aspect-4/3 overflow-hidden rounded-xl bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                  hiddenOnMobile ? "hidden sm:block" : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isGridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={cloudinaryUrl(image.id)}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback for missing images
                    const target = e.target as HTMLImageElement;
                    target.src = `https://placehold.co/800x600/e2e8f0/64748b?text=${encodeURIComponent(image.alt)}`;
                  }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                {/* Zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="rounded-full bg-white/90 p-3 shadow-lg">
                    <svg
                      className="h-6 w-6 text-neutral-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                      />
                    </svg>
                  </span>
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* View More button - mobile only */}
        {!showAllMobile && images.length > MOBILE_INITIAL_COUNT && (
          <div className="mt-8 text-center sm:hidden">
            <button
              type="button"
              onClick={() => setShowAllMobile(true)}
              className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              View More
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
        }}
      />
    </section>
  );
}
