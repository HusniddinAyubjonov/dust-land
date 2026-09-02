import { useInView } from "@/shared/lib";
import styles from "./feature-card.module.css";

export const FeatureCard = ({
  variant = "photo",
  decorated = false,
  grid = true,
  boxed = true,
  textBoxed = false,
  image,
  heading,
  text,
  reverse = false,
  index = 0,
  total = 1,
}) => {
  const altText = heading
    .flat()
    .map((part) => part.text)
    .join("");
  const isRenderMedia = variant === "render";
  const isFramed = isRenderMedia && boxed;
  const isPanorama = variant === "panorama";
  const showCorner = variant === "photo";
  const [ref, inView] = useInView({ threshold: 0.25 });

  return (
    <article
      ref={ref}
      className={`${styles.card} ${inView ? styles.inView : ""}`}
    >
      <div
        className={`${styles.frame} ${reverse ? styles.reverse : ""} ${isFramed ? styles.boxed : ""} ${isFramed && !grid ? styles.noGrid : ""}`}
      >
        <div
          className={`${styles.media} ${isRenderMedia ? styles.mediaRender : ""} ${isPanorama ? styles.mediaPanorama : ""} ${variant === "photo" ? styles.mediaPhoto : ""} ${decorated ? styles.mediaDecorated : ""}`}
        >
          <div className={styles.imageWrap}>
            <img
              className={styles.image}
              src={image}
              alt={altText}
              loading="lazy"
            />
          </div>
          {showCorner && (
            <span className={styles.corner} aria-hidden="true">
              <span className={styles.stripe} />
              <span className={styles.stripe} />
              <span className={styles.stripe} />
            </span>
          )}
        </div>

        <div
          className={`${styles.content} ${textBoxed ? styles.textBoxed : ""}`}
        >
          <span className={styles.textGlow} aria-hidden="true" />
          <h3 className={styles.heading}>
            {heading.map((line, lineIndex) => (
              <span key={lineIndex} className={styles.line}>
                {line.map((part, partIndex) => (
                  <span
                    key={partIndex}
                    className={part.accent ? styles.accent : undefined}
                  >
                    {part.text}
                  </span>
                ))}
              </span>
            ))}
          </h3>
          <p className={styles.text}>{text}</p>
        </div>
      </div>

      <div className={styles.dots} aria-hidden="true">
        {Array.from({ length: total }).map((_, dotIndex) => (
          <span
            key={dotIndex}
            className={`${styles.dot} ${dotIndex === index ? styles.dotActive : ""}`}
          />
        ))}
      </div>
    </article>
  );
};
