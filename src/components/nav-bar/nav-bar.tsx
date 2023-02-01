import styles from './nav-bar.module.sass';
import { NavigationProps } from './nav-bar.types';

export function NavBar({ navList }: NavigationProps) {
  return (
    <nav className={styles.container}>
      {navList.map((item, i) => {
        return (
          <span className={`${styles.item} ${item === 'Просмотр' && styles.item__active}`} key={i}>
            {item}
          </span>
        );
      })}
    </nav>
  );
}
