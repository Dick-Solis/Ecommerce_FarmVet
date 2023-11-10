import styled from '@emotion/styled';

//#region
const TextareaWrapper = styled.div`
  width: ${(props) => props.ancho};
  /* margin-bottom: 20px; */
  padding: 0 10px 0 0;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 40px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  background-color: #F4F4F4;
  border-radius: 4px;
  outline: none;
  resize: both;
  overflow: hidden;
`;
//#endregion

export function Textarea({ name,onChange,ancho,placeholder}){
  return (
    <TextareaWrapper ancho={ancho}>
      <StyledTextarea
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        required/>
    </TextareaWrapper>
  );
};
