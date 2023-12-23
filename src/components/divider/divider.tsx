import { DividerProps } from "./divider.props"
import styles from "./divider.module.css"
import cn from "classnames"

const Divider = ({className, ...props}: DividerProps): JSX.Element => {
  return <hr className={cn(className, styles.divider)} {...props} />
}

export default Divider