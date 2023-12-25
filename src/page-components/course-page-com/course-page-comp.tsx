import { CoursePageComponentProps } from "./course-page-comp.props"
import styles from "./course-page-com.module.css"
import { Advantages, Heading, HhData, Product, Sort, Tag, Text } from "@/src/components"

const CoursePageComponent = ({firsrCategory, page, products}: CoursePageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      {/* TITLE */}
      <div className={styles.title}>
        <Heading tag="h1">{page.title}</Heading>
        <Sort />
      </div>

      {/* PRODUCTS */}
      <div>{products && products.map((product, idx) => (
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