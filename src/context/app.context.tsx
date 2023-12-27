import { createContext, PropsWithChildren, ReactNode, useState } from "react";
import { MenuItem } from "../interfaces/menu.interface";
import { PageCategory } from "../interfaces/page.interface";

export interface IAppContext {
  menu: MenuItem[];
  firstCategory: PageCategory;
  setMenu?: (newMenu: MenuItem[]) => void;
  toggleMenu?: () => void;
  isOpen?: boolean;
}

export const AppContext = createContext<IAppContext>({menu: [], firstCategory: PageCategory.Courses})

export const AppContextProvider = ({firstCategory, menu, children}: PropsWithChildren<IAppContext>) => {
  const [menuState, setMenuState] = useState<MenuItem[]>(menu)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleMenu = () => setIsOpen(prev => !prev)

  const setMenu = (newMenu: MenuItem[]) => {
    setMenuState(newMenu)
  }

  return <AppContext.Provider value={{menu: menuState, firstCategory, setMenu, toggleMenu, isOpen}}>
    {children}
  </AppContext.Provider>
}