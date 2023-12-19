import styled from "@emotion/styled";

//#region
  const StyledTitle = styled.h2`
    font-family: 'Playpen Sans';
    color: #ffffff;
    text-align: center;
    font-size: 18px;
  `;

  const StyledDescription = styled.h4`
    width:100%;
    color: #ffffff;
    text-align: center;
  `;

  const StyledTitleFooter = styled.h3`
    /* width:100%; */
    font-family: 'Playpen Sans';
    text-align: center;
    color: #ffffff;
  `;

  const StyledText = styled.p`
    font-family: 'Playpen Sans';
    text-align: center;
    color: #ffffff;
    font-weight: bold;
  `;
//#endregion

export function TitleSection({children}){
  return(
    <StyledTitle>
      {children}
    </StyledTitle>
  )
}

export function TitleSectionFooter({children}){
  return(
    <StyledTitleFooter>
      {children}
    </StyledTitleFooter>
  )
}

export function TextSection({children}){
  return(
    <StyledText>
      {children}
    </StyledText>
  )
}

export function DescriptionSection({children}){
  return(
    <StyledDescription>
      {children}
    </StyledDescription>
  )
}
