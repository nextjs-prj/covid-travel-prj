import styles from "./modal.module.css";

export default function Modal({ style, closeFn, children }) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalBackdrop} onClick={closeFn}></div>
      <div style={style} className={styles.modalBody}>
        {children}
      </div>
    </div>
  );
}
