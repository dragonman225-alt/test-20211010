import styles from "./styles.module.scss";

export function Bar({ value }) {
  const percent = value;

  return (
    <div className={styles.bar}>
      <div className={styles.barFill} style={{ width: `${percent}%` }} />
      <div className={styles.percentText}>{percent}%</div>
    </div>
  );
}
