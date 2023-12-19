import { TextProps } from "./text.props";
import cn from 'classnames';
import styles from './text.module.css';

const Text = ({size = 'md', children}: TextProps): JSX.Element => {
  return <p className={cn(styles.p, {
    [styles.sm]: size === 'sm',
    [styles.md]: size === 'md',
    [styles.lg]: size === 'lg',
  })}>
    {children}
  </p>
}

export default Text;