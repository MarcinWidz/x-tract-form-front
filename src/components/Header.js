import { HeaderStyled } from "./styles/Header.styled";
import logo from "../assets/logo.png";

function Header() {
  return (
    <HeaderStyled>
      <img src={logo} alt='' />
    </HeaderStyled>
  );
}

export default Header;
