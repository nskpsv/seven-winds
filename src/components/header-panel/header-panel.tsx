import styles from './header-panel.module.sass';
import { HeaderProps } from './header-panel.types';

export function HeaderPanel({ title, children }: HeaderProps) {
  return (
    <div className={styles.container}>
      {title !== undefined && (
        <div className={styles.title}>
          <span className={styles.title_text}>{title}</span>
        </div>
      )}
      {children !== undefined && 
      <div className={styles.children}>
        {children}
      </div>}
    </div>
  );
}
