import { FeatureCard } from "@/entities/feature-card";
import { featuresData } from "./features-data.js";
import styles from "./features.module.css";

const TOTAL_FEATURES = 5;

export const Features = () => {
  return (
    <section className={styles.features} id="features">
      <div className={styles.head}>
        <h2 className={styles.title}>FEATURES</h2>
      </div>

      <div className={styles.stage}>
        {featuresData.map((item, index) => (
          <FeatureCard
            key={item.id}
            variant={item.variant}
            decorated={item.decorated}
            grid={item.grid !== false}
            boxed={item.boxed !== false}
            textBoxed={item.textBoxed}
            image={item.image}
            heading={item.heading}
            text={item.text}
            reverse={index % 2 === 1}
            index={index}
            total={TOTAL_FEATURES}
          />
        ))}
      </div>
    </section>
  );
};
