import styled from '@emotion/styled';
import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { NavLink } from 'react-router-dom';
import logoVeterinaria from '../../assets/LOGO-01.png'
import { colors } from '../../styles/colors';
import { MdEmail } from 'react-icons/md'
import { IoLogoWhatsapp } from 'react-icons/io';

//#region Styled Component
const Container = styled.header`
  width: 100%;
  /* height: 70px; */
  background: #0071E1;
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
    &:nth-of-type(2) {
      /* color: #fff; */
    }
    &:nth-of-type(3) {
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
  align-items: center;
  list-style: none;
  gap: 0 60px;
  @media (max-width: 960px) {
    /* background-color: #0d586f; */
    background: ${colors.primary};
    position: absolute;
    z-index: 10;
    top: 60px;
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
  color: #ffffff;
  transition: 0.3s ease-in-out;
  /* font-family: "Caveat"; */
  &:hover {
    color: #024a6f;
    text-decoration: none;
    div {
      svg {
        fill: #024a6f;
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
    fill: #ffffff;
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
      fill: #ffffff;
      margin-right: 0.5rem;
    }
}
`;

const StyledLogo = styled.img`
    width: 150px;
    height: 50px;
  `;

const ContentButtonInter = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  `;

const StyledButton = styled.button`
    background-color: transparent;
    border: 3px solid #0cb900;
    font-weight: bold;
    color: #ffffff;
    border-radius: 10px;
    padding: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    cursor: pointer;
  `;
//#endregion

export function ComponentNavbarHeader() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function pageWhatssap() {
    window.location.href = 'https://wa.link/kp4x93';
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = -15; 
      window.scrollTo({
        top: section.getBoundingClientRect().top + window.scrollY - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <LogoContainer>
            <StyledLogo src={logoVeterinaria} alt="" />
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
              <MenuItemLink to="/" onClick={() => {
                setShowMobileMenu(!showMobileMenu)
                scrollToSection('contact')
              }}>
                <div>
                  <MdEmail />
                  CONTÁCTANOS
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <ContentButtonInter>
                <StyledButton onClick={pageWhatssap}><IoLogoWhatsapp />Whatssap</StyledButton>
              </ContentButtonInter>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
}