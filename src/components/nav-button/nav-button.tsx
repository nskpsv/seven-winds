import styles from './nav-button.module.sass';
import { INavButtonProps } from './nav-button.types';

export function NavButton({ icon }: INavButtonProps) {
  return (
    <div className={styles.container}>
      <img src={icon} alt="" />
    </div>
  );
}
