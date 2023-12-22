import { HeaderPorps } from "./header.props"

const Header = ({...props}: HeaderPorps): JSX.Element => {
  return (
    <div {...props}>Header</div>
  )
}

export default Header