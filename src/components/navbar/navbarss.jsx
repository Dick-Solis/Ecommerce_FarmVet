import { useState } from 'react';
import styled from '@emotion/styled';

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 10px;
`;

const NavbarItem = styled.div`
  margin-right: 10px;
  color: #fff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Dropdown = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: #A100009F;
  padding: 10px;
  top: 40px;
  left: 0;
`;

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prevOpen) => !prevOpen);
  };

  return (
    <NavbarWrapper>
      <NavbarItem onClick={toggleDropdown}>Home</NavbarItem>
      <NavbarItem onClick={toggleDropdown}>About</NavbarItem>
      <NavbarItem onClick={toggleDropdown}>Services</NavbarItem>
      <NavbarItem onClick={toggleDropdown}>Contact</NavbarItem>
      <div>
        <NavbarItem onClick={toggleDropdown}>Dropdown</NavbarItem>
        <Dropdown isOpen={dropdownOpen}>
          <NavbarItem>Option 1</NavbarItem>
          <NavbarItem>Option 2</NavbarItem>
          <NavbarItem>Option 3</NavbarItem>
        </Dropdown>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;