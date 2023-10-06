import styled from "@emotion/styled";

//#region
  const NavStyled = styled.nav`
    position: relative;
    background-color: #ffffff;
    border-radius: 5px;
    top: -30px;
    height: 60px;
    padding: 5px 10px;
    /* z-index: 1; */
    margin: 0 60px;
    @media(max-width:768px){
      margin: 0 10px;
    }
  `;
//#endregion

export function ComponentNavbarHeader(){
  return(
    <NavStyled>
      <h2>hello</h2>
    </NavStyled>
  )
}