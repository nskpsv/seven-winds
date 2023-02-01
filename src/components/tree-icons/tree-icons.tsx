import styles from './tree-icons.module.sass';
import { TreeIconsProps } from './tree-icons.types';
import { documentIcon, trashIcon } from '../../assets/icons';

export function TreeIcons({ isEnable }: TreeIconsProps) {  

  function onAddClick(e: React.MouseEvent<HTMLDivElement>) {}

  function onDeleteClick(e: React.MouseEvent<HTMLDivElement>) {}

  return (
    <div className={styles.container}>
      <div className={`${styles.icon} ${styles['main-icon']}`}>
        <img className={styles.icon_image} src={documentIcon}/>
      </div>
      <div className={`${styles.icon} ${styles['hidden-icon']}`}>
        <img className={styles.icon_image} src={trashIcon}/>
      </div>
    </div>
  );
}
