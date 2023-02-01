import styles from './content-layout.module.sass';
import { LayoutProps } from './content-layout.types';

export function ContentLayout({ children }: LayoutProps) {
  return <div className={styles.container}>{children !== undefined && children}</div>;
}
