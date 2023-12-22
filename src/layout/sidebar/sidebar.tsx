import { SidebarPorps } from "./sidebar.props"

const Sidebar = ({...props}: SidebarPorps): JSX.Element => {
  return (
    <div {...props}>Sidebar</div>
  )
}

export default Sidebar