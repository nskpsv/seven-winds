import styles from './content-layout.module.sass';
import { ILayoutProps } from './content-layout.types';

export function ContentLayout({ children }: ILayoutProps) {
  return <div className={styles.container}>{children}</div>;
}
