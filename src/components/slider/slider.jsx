import { InfiniteLoopSlider } from "./InfiniteLoopSlider";
import { Tag } from "./tag";
import styles from "./style.module.scss";

export const Slider = () => {
  const TAGS = ["HTML", "CSS", "JavaScript", "CSS", "JavaScript"];

  const numbersCopy = [...TAGS, ...TAGS, ...TAGS];
  const DURATION = 40000;
  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  return (
    <div className={styles.tag__list}>
      <InfiniteLoopSlider duration={random(DURATION - 5000, DURATION + 5000)}>
        {numbersCopy.map((tag, index) => (
          <Tag text={tag} key={index} />
        ))}
      </InfiniteLoopSlider>
    </div>
  );
};
