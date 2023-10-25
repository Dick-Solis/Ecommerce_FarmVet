import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

//#region
  const StyledIcon = styled.div`
    color: ${({color}) => color};
    background-color: white;
    padding: 10px;
    border-radius: 50px;
    :hover{
      background-color: ${({color}) => color};
      color: white;
    }
  `;
//#endregion

export function SocialIcon({icon="",color="",link=""}){
  return(
    <NavLink to={link}>
      <StyledIcon color={color}>
        {icon}
      </StyledIcon>
    </NavLink>
  )
}