import { IPanelProps } from './side-panel.types';
import styles from './side-panel.module.sass';

export function SidePanel({ position = 'left', children }: IPanelProps) {
  return (
    <div
      className={`${styles.container} ${
        position === 'right' && styles.container__right
      }`}
    >
      {children !== undefined && children}
    </div>
  );
}
