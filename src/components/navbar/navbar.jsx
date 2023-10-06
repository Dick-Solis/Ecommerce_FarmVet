import styled from '@emotion/styled';
import React, { useState } from "react";
import {
  FaBattleNet,
  FaBars,
  FaTimes,
  FaHome,
  FaUserAlt,
  FaMapMarkerAlt,
  FaGlasses,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { NavLink } from 'react-router-dom';
// import logoVivero from '../../assets/MUNDO-VERDE-01.png'

//#region Styled Component
const Container = styled.header`
  width: 100%;
  /* height: 70px; */
  background: rgba(255, 255, 255, 0.9);
  padding: 5px;
  z-index: 1000;
  position: fixed;
`;

const Wrapper = styled.nav`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  /* flex-wrap: wrap; */
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const LogoContainer = styled.div`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  p {
    &:nth-child(2) {
      /* color: #fff; */
    }
    &:nth-child(3) {
      font-size: 1.5rem;
      font-weight: 500;
      /* color: #ffffff; */
    }
  }
  svg {
    /* fill: #ffffff; */
    margin-right: 0.5rem;
  }
`;

const Menu = styled.ul`
  height: 100%;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  list-style: none;
  gap: 0 60px;
  @media (max-width: 960px) {
    /* background-color: #0d586f; */
    background: rgba(255, 255, 255, 0.9);
    position: absolute;
    z-index: 10;
    top: 90px;
    left: ${({ open }) => (open ? "0" : "-100%")}; //Import
    width: 100%;
    height: 90vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: 0.5s all ease;
  }
`;

const MenuItem = styled.li`
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const MenuItemLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight:bold;
  text-decoration: none;
  height: 100%;
  font-size: 1rem;
  cursor: pointer;
  color: black;
  transition: 0.3s ease-in-out;
  font-family: "Caveat";
  &:hover {
    color: #6FAE99;
    text-decoration: none;
    div {
      svg {
        fill: #23394d;
      }
    }
}

div {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight:bold;
  svg {
    display: none;
    fill: #000000;
    margin-right: 0.5rem;
  }
}
@media (max-width: 960px) {
  width: 100%;
  align-items: flex-start;
  div {
    width: 100%;
    justify-content: left;
    svg {
      display: flex;
    }
  }
}
`;

const MobileIcon = styled.div`
  display: none;
  @media (max-width: 960px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      fill: black;
      margin-right: 0.5rem;
    }
}
`;

  const StyledLogo = styled.img`
    width: 235px;
    height: 80px;
  `;

//#endregion

export function ComponentNavbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <LogoContainer>
            <StyledLogo  alt="" />
          </LogoContainer>

          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
            <MenuItem>
              <MenuItemLink to="/" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaHome />
                  HOME
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink  to="/plantas" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaUserAlt />
                  PLANTAS
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink to="/servicios" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaMapMarkerAlt />
                  SERVICIOS
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink to="/contact" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaGlasses />
                  CONTÁCTANOS
                </div>
              </MenuItemLink>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
}