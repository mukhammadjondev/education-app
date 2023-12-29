import Link from "next/link"
import styles from "./navbar.module.css"
import Logo from "../logo-white.svg"
import { navLink } from "@/src/helpers/constants"
import { IconButton, Search, Text } from "@/src/components"
import { motion } from "framer-motion"
import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

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

  const toggleMenu = () => setIsOpen(prev => !prev)

  return (
    <div className={styles.navbar}>
      <nav className={styles.nav}>
        <Link href={'/'}>
          <Logo />
        </Link>
        <div className={styles.navigation}>
          {navLink.map((nav, idx) => (
            <Link href={nav.route} key={idx}>
              <Text className={styles.navTitle}>{nav.name}</Text>
            </Link>
          ))}
          <Search />
        </div>
        <IconButton appearance="white" onClick={toggleMenu} icon={isOpen ? 'close' : 'menu'} className={styles.mobileIcon} />
        <motion.div variants={variants} initial={'closed'} animate={isOpen ? 'opened' : 'closed'} className={styles.mobileMenu}>
          {navLink.map((nav, idx) => (
            <Link href={nav.route} key={idx}>
              <Text>{nav.name}</Text>
            </Link>
          ))}
          <Search className={styles.search} />
        </motion.div>
      </nav>
    </div>
  )
}

export default Navbar