import { CoursePageComponentProps } from "./course-page-comp.props"
import styles from "./course-page-com.module.css"
import { Advantages, Heading, HhData, Product, Sort, Tag, Text } from "@/src/components"
import { useReducer } from "react"
import { sortReducer } from "./sort.reducer"
import { SortEnum } from "@/src/components/sort/sort.props"

const CoursePageComponent = ({page, products}: CoursePageComponentProps): JSX.Element => {
  const [state, dispatch] = useReducer(sortReducer, {sort: SortEnum.Rating, products: products})

  const setSort = (sort: SortEnum) => {
    dispatch({type: sort})
  }

  return (
    <div className={styles.wrapper}>
      {/* TITLE */}
      <div className={styles.title}>
        <Heading tag="h1">{page.title}</Heading>
        <Sort sort={state.sort} setSort={setSort} />
      </div>

      {/* PRODUCTS */}
      <div>{state.products && state.products.map((product, idx) => (
        <Product product={product} key={idx} />
      ))}</div>

      {/* VACATIONS */}
      <div className={styles.hhTitle}>
        <Heading tag="h2">Vacations - {page.category}</Heading>
        <Tag color="red" size="md">hh.ru</Tag>
      </div>

      {/* HHDATA */}
      {page.hh && <HhData {...page.hh} />}

      {/* ADVANTAGES */}
      {page.advantages.length && (
        <>
          <Heading tag="h2">Advantages</Heading>
          <Advantages advantages={page.advantages} />
        </>
      )}

      {/* DESCRIPTION */}
      <Text>{page.description}</Text>

      {/* SKILLS */}
      <Heading tag="h2">Skills</Heading>
      {page.tags.length && page.tags.map(t => (
        <Tag color="primary" key={t}>{t}</Tag>
      ))}
    </div>
  )
}

export default CoursePageComponent