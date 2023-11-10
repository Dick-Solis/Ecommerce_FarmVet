import styled from '@emotion/styled';

//#region
const DivInput = styled.div`
display: flex;
flex-direction: column;
width: ${(props) => props.ancho};
gap: 4px;
text-align: left;
padding: 0 10px 0 0;
`;

const TitleInput = styled.label`
font-weight:bold;
`;

const BodyInput = styled.input`
font-size: 1rem;
box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
border-radius: 4px;
border: none;
background-color: #F4F4F4;
height: 40px;
width: 100%;
padding: 4px 8px;
outline: none;
&:hover {
  color: black;
}
`;

const StyledErrors = styled.p`
font-size: 14px;
color: red;
width: 100%;
text-align: center;
`;

//#endregion

export function ComponentInput({
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  label,
  errors,
  onKeyUp,
  ancho,
}) {
  return (
    <DivInput ancho={ancho}>
      {label && <TitleInput htmlFor={id || name}>{label}</TitleInput>}
      <BodyInput
        type={type}
        name={name}
        id={id || name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
        required
      />
      <StyledErrors>{errors}</StyledErrors>
    </DivInput>
  );
}