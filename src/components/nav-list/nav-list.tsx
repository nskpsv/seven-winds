import styles from './nav-list.module.sass';
import { INavListProps } from './nav-list.types';
import { listItemIcon } from '../../assets/icons';

export function NavList({ itemsList }: INavListProps) {
  return (
    <div className={styles.container}>
      {itemsList.map((item, i) => {
        return (
          <div
            className={`${styles.item} ${
              item === 'СМР' && styles.item__active
            }`}
            key={i}
          >
            <div className={styles.item_icon}>
              <img
                className={styles['item_icon-image']}
                src={listItemIcon}
                alt="#"
              />
            </div>
            <span className={styles.item_title}>{item}</span>
          </div>
        );
      })}
    </div>
  );
}
