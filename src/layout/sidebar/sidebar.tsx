import Menu from "../menu/menu"
import { SidebarPorps } from "./sidebar.props"

const Sidebar = ({...props}: SidebarPorps): JSX.Element => {
  return (
    <div {...props}>
      <Menu />
    </div>
  )
}

export default Sidebar