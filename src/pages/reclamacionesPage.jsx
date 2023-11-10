import styled from "@emotion/styled";
import { ComponentFooter } from "../components/footer/footer";
import { ComponentInput } from "../components/input/input";
import { ComponentSelected } from "../components/selected/selected";
import { Textarea } from "../components/textArea/textArea";
import { NavLink } from "react-router-dom";
import { addReclamacion } from "../services/reclamaciones";
import { useState } from "react";
import { WindowAlert } from "../components/modal/modals";

//#region
const StyledPage = styled.main`

  `;

const ContainerPage = styled.section`
    min-height: 100vh;
    padding-top: 70px;
    margin-bottom: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #ffffff;
  `;

const SectionInput = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px 0;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1024px;
  padding: 20px;
  gap: 15px;
`;

const StyledTitleBook = styled.h4`
  text-align: left;
`;

const StyledCondiciones = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  font-weight: bold;
`;

const StyledButton = styled.button`
background-color: #ff0000;
padding: 10px;
color: #ffffff;
font-weight: bold;
border: none;
border-radius: 10px;
cursor: pointer;
`;

const MessagueImpoportante = styled.h3`
  font-weight: bold;
  color: #FC0000;
`;

const MessagueCorrect = styled.p`
  word-wrap: break-word;
  color: #3CFF00;
  font-weight: bold;
`;

const MessagueIncorrect = styled.p`
  font-weight: bold;
  word-wrap: break-word;
  color: #FC0000;
`;

const ContainerErrors = styled.div`

`;
//#endregion

export function ReclamacionesPage() {

  const optionsDescription = [
    { value: '', label: 'Seleccione Tipo de Bien' },
    { value: 'producto', label: 'Producto' },
    { value: 'servicio', label: 'Servicio' },
  ];

  const optionsReclamo = [
    { value: '', label: 'Seleccione Tipo de Reclamo' },
    { value: 'queja', label: 'Queja' },
    { value: 'reclamo', label: 'Reclamo' },
  ];

  const [dataFormulario, setDataFormulario] = useState({
    "nombres": "",
    "apellidos": "",
    "telefono": "",
    "correo": "",
    "identificacion": "",
    "departamento": "",
    "direccion": "",
    "tipo_bien": "",
    "monto_reclamado": "",
    "descripcion": "",
    "tipo_reclamo": "",
    "detalle": "",
    "pedido": "",
  })

  const [send, setSend] = useState(false)
  const [response, setResponse] = useState([])
  const [dataErrors, setDataErrors] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setDataFormulario({ ...dataFormulario, [name]: value });
  }

  function submitData(event) {
    event.preventDefault();
    addReclamacion(dataFormulario)
      .then(response => {
        setResponse(response);
        if(response.errores){
          for (let error in response.errores) {
            setDataErrors(...dataErrors, response.errores[error][0]);
          }
        }
        setSend(true);
      })
      .catch(error => console.error(error));
  }

  return (
    <StyledPage>
      {send && <WindowAlert widthAlertWindow="300px" heightAlertWindow="250px" desactive={setSend}>
        {response.message ? <MessagueCorrect>
          {response.message}
        </MessagueCorrect> : <ContainerErrors>
          {dataErrors.map(error =>(
            <MessagueIncorrect>{error}</MessagueIncorrect>
          ))}
        </ContainerErrors>}
      </WindowAlert>}
      <ContainerPage>
        <h2>Libro de Reclamaciones</h2>
        <StyledForm onSubmit={submitData}>
          <StyledTitleBook>1. IDENTIFICACIÓN DEL CONSUMIDOR RECLAMANTE</StyledTitleBook>
          <SectionInput>
            <ComponentInput
              placeholder="Nombres"
              ancho="50%"
              name="nombres"
              onChange={handleChange}
            />
            <ComponentInput
              placeholder="Apellidos"
              ancho="50%"
              name="apellidos"
              onChange={handleChange}
            />
            <ComponentInput
              placeholder="Teléfono"
              ancho="50%"
              type="number"
              name="telefono"
              onChange={handleChange}
            />
            <ComponentInput
              placeholder="E-mail"
              ancho="50%"
              type="email"
              name="correo"
              onChange={handleChange}
            />
            <ComponentInput
              placeholder="DNI, Cédula"
              ancho="50%"
              type="number"
              name="identificacion"
              onChange={handleChange}
            />
            <ComponentInput
              placeholder="Departamento"
              ancho="50%"
              name="departamento"
              onChange={handleChange}
            />
            <ComponentInput
              placeholder="Ingrese dirección"
              ancho="100%"
              name="direccion"
              onChange={handleChange}
            />
          </SectionInput>

          <StyledTitleBook>2. IDENTIFICACIÓN DEL BIEN CONTRATADO</StyledTitleBook>
          <SectionInput>
            <ComponentSelected name="tipo_bien" options={optionsDescription} ancho="50%" onChange={handleChange} />
            <ComponentInput
              placeholder="Monto Reclamado S/0.00"
              ancho="50%"
              type="number"
              name="monto_reclamado"
              onChange={handleChange}
            />
            <Textarea
              ancho="100%"
              placeholder="Ingrese la Descripción"
              name="descripcion"
              onChange={handleChange}
            />
          </SectionInput>

          <StyledTitleBook>3. DETALLE DE LA RECLAMACIÓN Y PEDIDO DEL CONSUMIDOR</StyledTitleBook>
          <SectionInput>
            <ComponentSelected name="tipo_reclamo" options={optionsReclamo} ancho="100%" onChange={handleChange} />
            <Textarea
              ancho="100%"
              placeholder="Ingrese el Detalle"
              name="detalle"
              onChange={handleChange}
            />
            <Textarea
              ancho="100%"
              placeholder="Ingrese el Pedido"
              name="pedido"
              onChange={handleChange}
            />
          </SectionInput>
          <StyledCondiciones>
            <label htmlFor="condiciones">Estoy Conforme con los terminos de mi reclamo o queja.<NavLink to='/politicas_de_privacidad'>Ver Terminos y Concidiciones</NavLink></label>
            <input id="condiciones" name="condiciones" type="checkbox" required />
          </StyledCondiciones>
          <MessagueImpoportante>Todos lo campos deben de estar rellenados(*)</MessagueImpoportante>
          <StyledButton type="submit">Enviar Formulario</StyledButton>
        </StyledForm>
      </ContainerPage>
      <ComponentFooter />
    </StyledPage>
  )
}