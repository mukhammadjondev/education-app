import { HeaderPorps } from "./header.props"
import styles from "./header.module.css"
import cn from "classnames"
import LogoIcon from "../logo.svg"
import { useContext, useState } from "react"
import { IconButton } from "@/src/components"
import Sidebar from "../sidebar/sidebar"
import { motion } from "framer-motion"
import Link from "next/link"
import { AppContext } from "@/src/context/app.context"

const Header = ({className, ...props}: HeaderPorps): JSX.Element => {
  const {toggleMenu, isOpen} = useContext(AppContext)

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {stiffness: 20}
    },
    closed: {
      opacity: 0,
      x: '100%',
    },
  }

  return (
    <div className={cn(styles.header, className)} {...props}>
      <div className={styles.wrapper}>
        <Link href={'/'}>
          <LogoIcon />
        </Link>
        <IconButton icon="menu" appearance="white" onClick={toggleMenu} />
      </div>
      <motion.div variants={variants} initial={'closed'} animate={isOpen ? 'opened' : 'closed'} className={styles.mobileMenu}>
        <Sidebar />
        <IconButton className={styles.closeIcon} icon='close' appearance="white" onClick={toggleMenu} />
      </motion.div>
    </div>
  )
}

export default Header