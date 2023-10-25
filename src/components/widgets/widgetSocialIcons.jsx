import styled from "@emotion/styled";
import { Social } from "../../data/social";
import { SocialIcon } from "../Icons/sociaIcon";

//#region
const ContainerIconsSocial = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px 10px;
  `;


//#endregion

export function SectionSocialIcons() {
  return (
    <ContainerIconsSocial>
      {Social.map(icons => (
        <SocialIcon key={icons.id} icon={<icons.icon/>} color={icons.color} link={icons.link} />
      ))}
    </ContainerIconsSocial>
  )
}