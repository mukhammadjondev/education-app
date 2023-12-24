import { AdvantagesProps } from "./advantages.props"
import styles from "./advantages.module.css"
import CheckIcon from "./check.svg"
import Divider from "../divider/divider"

const Advantages = ({advantages}: AdvantagesProps): JSX.Element => {
  return (
    <>
      {advantages.map(c => (
        <div className={styles.advantage} key={c.id}>
          <CheckIcon />
          <div className={styles.title}>{c.title}</div>
          <Divider className={styles.vline} />
          <p>{c.description}</p>
        </div>
      ))}
    </>
  )
}

export default Advantages