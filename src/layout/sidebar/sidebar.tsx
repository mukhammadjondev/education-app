import Menu from "../menu/menu"
import { SidebarPorps } from "./sidebar.props"
import cn from "classnames"
import styles from "./sidebar.module.css"
import Link from "next/link"
import Logo from "../logo.svg"
import { Divider, Search } from "@/src/components"

const Sidebar = ({className, ...props}: SidebarPorps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Link href={'/'}>
        <Logo />
        <Divider />
      </Link>
      <Search />
      <Menu />
    </div>
  )
}

export default Sidebar