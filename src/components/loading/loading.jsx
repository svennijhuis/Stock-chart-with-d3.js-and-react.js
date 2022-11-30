import styles from "./loading.module.scss";
export const Loading = () => {
  return (
    <div className={styles.load_container}>
      <div className={styles.linespinner}></div>
    </div>
  );
};
