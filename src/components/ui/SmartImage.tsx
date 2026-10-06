import { useEffect, useRef, useState } from "react";

interface SmartImageProps {
  /** Fallback source (also the default `img src`). Served from `public/`. */
  src: string;
  /** Optional WebP source — rendered as `<source type="image/webp">`. */
  webpSrc?: string;
  alt: string;
  /** Intrinsic dimensions — required to reserve space and avoid CLS. */
  width: number;
  height: number;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
  objectFit?: "cover" | "contain";
  sizes?: string;
  className?: string;
}

export function SmartImage({
  src,
  webpSrc,
  alt,
  width,
  height,
  loading = "lazy",
  fetchPriority = "auto",
  objectFit = "cover",
  sizes,
  className = "",
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // If the browser had the image cached, `onLoad` may fire before React
  // attaches its handler. Detect that on mount.
  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, []);

  return (
    <div
      className={`smart-image ${loaded ? "is-loaded" : ""} ${className}`.trim()}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <div className="smart-image__skeleton" aria-hidden="true" />
      <picture>
        {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
        <img
          ref={imgRef}
          className="smart-image__img"
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          fetchPriority={fetchPriority}
          decoding="async"
          sizes={sizes}
          style={{ objectFit }}
          onLoad={() => setLoaded(true)}
        />
      </picture>
    </div>
  );
}