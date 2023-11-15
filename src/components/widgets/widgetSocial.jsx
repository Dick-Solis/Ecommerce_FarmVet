import styled from "@emotion/styled";
import { BiLogoFacebookCircle } from "react-icons/bi";


export const Navar2 = () => {
  return (
    <NavarContainer>
      <Ul className="wrapper">
        <Li className="icon facebook">
          <Span className="tooltip">Facebook</Span>
          <Span>
            <i className="logo__redes">
              <BiLogoFacebookCircle />
            </i>
          </Span>
        </Li>
      </Ul>
    </NavarContainer>
  );
};

const NavarContainer = styled.nav`
  display: flex;
  align-items: center;
`;

const Ul = styled.ul`
  &.wrapper {
    display: inline-flex;
    list-style: none;
  }
`;

const Li = styled.li`
  &.icon {
    position: relative;
    background: #ffffff;
    border-radius: 50px;
    padding: 15px;
    margin: 10px;
    width: 50px;
    height: 50px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  &:hover .tooltip {
    top: -45px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  &:hover span,
  &:hover .tooltip {
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
  }

  &.facebook:hover,
  &.facebook:hover .tooltip,
  &.facebook:hover .tooltip::before {
    background: #3868a8;
    color: #ffffff;
  }

  &.twitter:hover,
  &.twitter:hover .tooltip,
  &.twitter:hover .tooltip::before {
    background: #71c1ed;
    color: #ffffff;
  }
  &.instagram:hover,
  &.instagram:hover .tooltip,
  &.instagram:hover .tooltip::before {
    background: #8e4c82;
    color: #ffffff;
  }
  &.tiktok:hover,
  &.tiktok:hover .tooltip,
  &.tiktok:hover .tooltip::before {
    background: #143054;
    color: #ffffff;
  }
  &.youtube:hover,
  &.youtube:hover .tooltip,
  &.youtube:hover .tooltip::before {
    background: #b63434;
    color: #ffffff;
  }
`;

const Span = styled.span`
  &.tooltip {
    position: absolute;
    top: 0;
    font-size: 14px;
    background: #ffffff;
    color: #000000; /* Cambiado a color negro */
    padding: 5px 8px;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  &.tooltip::before {
    position: relative;
    content: "";
    height: 8px;
    width: 8px;
    background: #ffffff;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
`;