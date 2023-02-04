import styles from './tree-icons.module.sass';
import { ITreeIconsProps } from './tree-icons.types';
import { documentIcon, trashIcon } from '../../../assets/icons';

export function TreeIcons({
  enableAdd,
  level,
  onAdd,
  onDelete,
}: ITreeIconsProps) {

  function LevelSpace(level: number) {
    const result: JSX.Element[] = [];

    if (level >= 1) {
      result.push(
        <div className={styles.level} key={'firstLevel'}>
          <div className={styles.firstLevel}></div>
        </div>,
      );

      while (level > 1) {
        result.unshift(
          <div className={styles.level} key={level}>
            <div className={styles.nLevel}></div>
          </div>,
        );
        level--;
      }
    }

    return result;
  }

  return (
    <div className={styles.container}>
      {LevelSpace(level)}
      <div className={styles.icons}>
        <div className={styles.icon}>
          <img
            className={styles.iconImage}
            onClick={() => {
              enableAdd && onAdd();
            }}
            src={documentIcon}
          />
        </div>
        <div className={`${styles.icon} ${styles.hiddenIcon}`}>
          <img
            className={styles.iconImage}
            onClick={onDelete}
            src={trashIcon}
          />
        </div>
      </div>
      <div className={styles.expander}></div>
    </div>
  );
}
