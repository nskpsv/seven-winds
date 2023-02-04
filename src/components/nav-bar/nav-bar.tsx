import styles from './nav-bar.module.sass';
import { INavigationProps } from './nav-bar.types';

export function NavBar({ navList }: INavigationProps) {
  return (
    <nav className={styles.container}>
      {navList.map((item, i) => {
        return (
          <span
            className={`${styles.item} ${
              item === 'Просмотр' && styles.item__active
            }`}
            key={i}
          >
            {item}
          </span>
        );
      })}
    </nav>
  );
}
