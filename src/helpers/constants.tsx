import { IFirstLevelMenu } from "../interfaces/menu.interface";
import { PageCategory } from "../interfaces/page.interface";
import CoursesIcon from "./icons/courses.svg";
import BooksIcon from "./icons/books.svg";

export const firstLevelMenu: IFirstLevelMenu[] = [
  {route: 'courses', name: 'Courses', id: PageCategory.Courses, icon: <CoursesIcon />},
  {route: 'books', name: 'Books', id: PageCategory.Books, icon: <BooksIcon />},
]