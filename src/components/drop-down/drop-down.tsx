import styles from './drop-down.module.sass';
import { DropDownProps } from './drop-down.types';

export function DropDown({ title, caption }: DropDownProps) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span className={styles.title_text}>{title}</span>
        {
            caption !== undefined &&
            <span className={styles.title_caption}>{caption}</span>
        }
      </div>
      <div className={styles.arrow}>
        <div className={styles.arrow_icon}></div>
      </div>
    </div>
  );
}
