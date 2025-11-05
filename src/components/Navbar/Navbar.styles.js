import styled from "styled-components";

export const NavbarContainer = styled.div`
  background-color: #273054; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 13px 100px;
`;

export const LogoSection = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
`;

export const LogoImg = styled.img`
  width: 45px;
  height: 45px;
  object-fit: contain;
`;

export const LogoText = styled.h1`
  color: white;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 0;
`;

export const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 60%;
  transform: translateX(-50%);
  padding: 10px 100px;
  background: rgba(10, 15, 30, 0.7); 
  backdrop-filter: blur(10px);        
  -webkit-backdrop-filter: blur(10px);
  border-radius: 14px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
`;

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 25px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li``;

export const NavLink = styled.a`
  color: #cfd8e3;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }
`;
