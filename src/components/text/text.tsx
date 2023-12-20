import { TextProps } from "./text.props";
import cn from 'classnames';
import styles from './text.module.css';

const Text = ({size = 'md', children, ...props}: TextProps): JSX.Element => {
  return <p
    className={cn(styles.p, {
      [styles.sm]: size === 'sm',
      [styles.md]: size === 'md',
      [styles.lg]: size === 'lg',
    })}
    {...props}
  >
    {children}
  </p>
}

export default Text;