export interface GalleryItem {
  readonly src: string;
  readonly alt: string;
  readonly caption?: string;
}

export interface GalleryProps {
  readonly items: ReadonlyArray<GalleryItem>;
  readonly columns?: string; // tailwind grid columns e.g. 'md:grid-cols-3'
  readonly sizes?: string; // responsive sizes attribute
}

export function Gallery({ items, columns = "md:grid-cols-3", sizes = "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" }: GalleryProps): JSX.Element {
  return (
    <div className={`grid grid-cols-1 ${columns} gap-6`}>
      {items.map((g, index) => (
        <figure key={index} className="group overflow-hidden rounded-xl shadow-soft hover:shadow-elegant transition-all duration-300">
          <div className="overflow-hidden">
            <img
              src={g.src}
              alt={g.alt}
              loading="lazy"
              decoding="async"
              sizes={sizes}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          {g.caption ? (
            <figcaption className="px-4 py-3 text-sm text-gray-600 bg-white">{g.caption}</figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}


