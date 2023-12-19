import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

//#region
  const StyledIcon = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${props => props.tamaño};
    color: white;
    padding: 10px;
    border-radius: 50px;
    :hover{
      background-color: #ffffff;
      color: ${({color}) => color};
    }
  `;
//#endregion

export function SocialIcon({icon="",color="",link="",tamaño="25px"}){
  return(
    <NavLink to={link}>
      <StyledIcon color={color} tamaño={tamaño}>
        {icon}
      </StyledIcon>
    </NavLink>
  )
}