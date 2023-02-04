import { InputHTMLAttributes } from 'react';
import styles from './input-field.module.sass';

export function InputField({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={`${styles.field} ${className}`} {...props} />;
}
