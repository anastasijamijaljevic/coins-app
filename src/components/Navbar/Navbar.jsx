import logo from '../../assets/images/logo-removebg-preview.png'
import {
    NavbarContainer,
    LogoSection,
    LogoImg,
    LogoText,
    NavLink,
    NavLinks,
    NavItem,
    LinksWrapper
} from './Navbar.styles'
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';


export const Navbar = () => {
    return (
        <NavbarContainer>
            <LogoSection href='#'>
                <LogoImg src={logo} alt="Crypto-app" />
                <LogoText>Crypto-App</LogoText>
            </LogoSection>

            <LinksWrapper>
                <NavLinks>
                    <NavItem><NavLink to="/">Home</NavLink></NavItem>
                    <NavItem><NavLink to="/coins">Coins</NavLink></NavItem>
                    <NavItem><NavLink to="/about">About Us</NavLink></NavItem>
                    <NavItem>
                        <NavLink to="/favorites">
                            <FaHeart style={{ color: "#e63946", fontSize: "1.3rem" }} />
                        </NavLink>
                    </NavItem>
                </NavLinks>
            </LinksWrapper>
        </NavbarContainer>
    )
}

