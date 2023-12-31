import { firstLevelMenu } from "@/src/helpers/constants"
import { MenuItem } from "@/src/interfaces/menu.interface"
import { PageModel } from "@/src/interfaces/page.interface"
import { ProductModel } from "@/src/interfaces/product.interface"
import { withLayout } from "@/src/layout/layout"
import Seo from "@/src/layout/seo/seo"
import { CoursePageComponent } from "@/src/page-components"
import axios from "axios"
import { GetServerSideProps } from "next"

const Index = ({products, firstCategory, page}: PageProps) => {
  return (
    <Seo metaTitle={page.title} metaDescription={page.description} metaKeyword={page.tags.toString()}>
      <CoursePageComponent products={products} page={page} firsrCategory={firstCategory} />
    </Seo>
  )
}

export default withLayout(Index)

export const getServerSideProps: GetServerSideProps<PageProps> = async ({query}) => {
  const {slug, type} = query

  if(!slug) {
    return {notFound: true}
  }

  const firstCategoryItem = firstLevelMenu.find(m => m.route === type)!


  const {data: menu} = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`, {
    firstCategory: firstCategoryItem.id
  })
  const {data: page} = await axios.get<PageModel>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find/${slug}`)
  const {data: products} = await axios.post<ProductModel[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/product-find`, {category: slug})

  return {
    props: {menu, page, products, firstCategory: firstCategoryItem.id}
  }
}

interface PageProps extends Record<string, unknown> {
  menu: MenuItem[];
  page: PageModel;
  products: ProductModel[];
  firstCategory: number;
}