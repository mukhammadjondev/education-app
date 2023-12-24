import { TagProps } from "./tag.props";
import styles from './tag.module.css';
import cn from 'classnames';

const Tag = ({size = 'md', color = 'primary', children, className, ...props}: TagProps): JSX.Element => {
  return <div
    className={cn(styles.tag, className, {
      [styles.sm]: size === 'sm',
      [styles.md]: size === 'md',
      [styles.red]: color === 'red',
      [styles.primary]: color === 'primary',
      [styles.green]: color === 'green',
    })}
    {...props}
  >
    {children}
  </div>
}

export default Tag;