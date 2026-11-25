import { getImageProps } from "next/image";

interface ResponsiveHeroImageProps {
  desktopSrc: string;
  mobileSrc: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

/**
 * Renders a single responsive <picture> element using Next.js Image optimization
 * so the browser downloads only the viewport-appropriate hero image.
 */
export function ResponsiveHeroImage({
  desktopSrc,
  mobileSrc,
  alt,
  className = "object-cover object-center",
  priority = true,
}: ResponsiveHeroImageProps) {
  const common = {
    alt,
    fill: true,
    sizes: "100vw",
    priority,
    className,
  };

  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ ...common, src: desktopSrc });

  const { props: mobileProps } = getImageProps({ ...common, src: mobileSrc });

  return (
    <picture className="block absolute inset-0 w-full h-full">
      <source media="(min-width: 768px)" srcSet={desktopSrcSet} />
      <img {...mobileProps} alt={alt} />
    </picture>
  );
}
