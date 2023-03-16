import StyledHeader from "style/Header/StyledHeader";
import HeaderLogo from "style/Header/HeaderLogo";

const Header = () => (
    <StyledHeader>
        <HeaderLogo src={require('img/logo.png')}/>
    </StyledHeader>
)

export default Header;
