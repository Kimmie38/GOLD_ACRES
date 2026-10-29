import Image from "next/image";
import Link from "next/link";

type Photo = { src: string; alt: string; portrait?: boolean };

/**
 * Endlessly sliding rows of photos. Each row renders its photos twice and slides by
 * exactly half its width, so the loop is seamless. Pure CSS, so it costs no JS.
 */
export default function PhotoMarquee({ photos }: { photos: Photo[] }) {
  const half = Math.ceil(photos.length / 2);
  const rows = [
    { items: photos.slice(0, half), reverse: false, duration: "90s" },
    { items: photos.slice(half), reverse: true, duration: "100s" },
  ];

  return (
    <div className="marquee-mask space-y-4">
      {rows.map(({ items, reverse, duration }, r) => (
        <div key={r} className="marquee group overflow-hidden">
          <ul
            className={`marquee-track flex w-max group-hover:[animation-play-state:paused] ${reverse ? "[animation-direction:reverse]" : ""}`}
            style={{ animationDuration: duration }}
          >
            {[...items, ...items].map((p, i) => {
              const copy = i >= items.length;
              return (
                <li key={`${p.src}-${i}`} aria-hidden={copy || undefined} className="shrink-0 pr-4">
                  <Link
                    href="/gallery"
                    tabIndex={copy ? -1 : undefined}
                    className={`relative block h-56 overflow-hidden rounded-2xl sm:h-72 ${p.portrait ? "aspect-[3/4]" : "aspect-[4/3]"}`}
                  >
                    <Image
                      src={p.src}
                      alt={copy ? "" : p.alt}
                      fill
                      quality={90}
                      sizes="400px"
                      // Photos slide in from the side, so lazy-loading would show blank tiles.
                      loading="eager"
                      className="object-cover transition duration-700 hover:scale-105"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
