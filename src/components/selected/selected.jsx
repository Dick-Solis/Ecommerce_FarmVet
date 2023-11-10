import styled from '@emotion/styled';

//#region
const SelectWrapper = styled.div`
  width: ${(props) => props.ancho};
  /* margin-bottom: 20px; */
  padding: 0 10px 0 0;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 7px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`;
//#endregion

export function ComponentSelected({ options, onChange,ancho,name }){
  return (
    <SelectWrapper ancho={ancho}>
      <StyledSelect onChange={onChange} name={name} required >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </SelectWrapper>
  );
};