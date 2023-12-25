import { SearchProps } from "./search.props"
import styles from "./search.module.css"
import cn from "classnames"
import Input from "../input/input"
import Button from "../button/button"
import SearchIcon from "./search.svg"
import { KeyboardEvent, useState } from "react"
import { useRouter } from "next/router"

const Search = ({className, ...props}: SearchProps): JSX.Element => {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const searchHandler = () => {
    if(search && search.trim() !== '') {
      router.push({pathname: '/search', query: {q: search}})
    }
  }

  const handleKeySearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter' && search && search.trim() !== '') {
      router.push({pathname: '/search', query: {q: search}})
    }
  }

  return (
    <div className={cn(className, styles.search)} {...props}>
      <Input placeholder="Search..." className={styles.input} value={search} onChange={e => setSearch(e.target.value)} onKeyUp={handleKeySearch} />
      <Button appearance="primary" className={styles.btn} onClick={searchHandler}>
        <SearchIcon />
      </Button>
    </div>
  )
}

export default Search