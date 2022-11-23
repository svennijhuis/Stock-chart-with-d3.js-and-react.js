import styles from "./style.module.scss";

export const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div
      className={styles.loop__slider}
      style={{
        "--duration": `${duration}ms`,
      }}
    >
      <div className={styles.inner}>
        {children}
        {children}
      </div>
    </div>
  );
};
