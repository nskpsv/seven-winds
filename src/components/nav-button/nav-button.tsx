import styles from './nav-button.module.sass';
import { NavButtonProps } from './nav-button.types';

export function NavButton({icon}: NavButtonProps) {
    
    return (
        <div className={styles.container}>
            <img src={icon} alt=""/>
        </div>
    )
}