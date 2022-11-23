import styles from "./style.module.scss";

export const Tag = ({ text, color }) => (
  <div className={styles.tag} style={{ "--color": color }}>
    <span>#</span> {text}
  </div>
);
