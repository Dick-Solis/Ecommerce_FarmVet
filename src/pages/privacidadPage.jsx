import styled from "@emotion/styled";
import { ComponentFooter } from "../components/footer/footer";

//#region
const PageArticle = styled.main`
    padding-top: 70px;
    height: 100vh;
  `;

const SectionPage = styled.article`
    min-height: 100vh;
    padding: 0 20px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    /* gap: 7px; */
  `;
//#endregion

export function Article() {
  return (
    <PageArticle>
      <SectionPage>
        <h4> Política de Privacidad de la Veterinaria FARMAVET</h4>
        <br/>
        <h5>Fecha de entrada en vigor: 2 de Noviembre de 2023</h5>
        <br/>
        <h6>FARMAVET, en adelante "Nosotros" o "Nuestra", se compromete a proteger la privacidad de nuestros clientes y las mascotas a su cargo. Esta política de privacidad describe cómo recopilamos, utilizamos y protegemos la información personal que nos proporciona.</h6>
        <br />
        <h5>1. Información que recopilamos</h5>
        <h6>Información del cliente: Recopilamos información personal del cliente, como nombre, dirección, número de teléfono, dirección de correo electrónico y cualquier otra información necesaria para brindar nuestros servicios y establecer una relación comercial.</h6>
        <h6>Información de la mascota: También recopilamos información sobre las mascotas, como nombre, especie, raza, historial médico, tratamientos y otros datos relevantes para brindar atención veterinaria.</h6>
        <h6>Información de pago: En caso de servicios que requieran un pago, recopilamos información financiera, como números de tarjeta de crédito, para procesar los pagos de los servicios.</h6>
        <br />
        <h5>2. Uso de la información</h5>
        <h6>Utilizamos la información recopilada para los siguientes fines:</h6>
        <h5>🐶 Proporcionar servicios veterinarios y atención a las mascotas.</h5>
        <h5>🐶 Comunicarnos con los clientes sobre citas, tratamientos y recordatorios.</h5>
        <h5>🐶 Procesar pagos y facturación.</h5>
        <h5>🐶 Mantener registros médicos de las mascotas.</h5>
        <h5>🐶 Cumplir con obligaciones legales y reglamentarias.</h5>
        <br />
        <h5>3. Compartir la información</h5>
        <h6>No compartimos la información personal de nuestros clientes y sus mascotas con terceros, excepto en los siguientes casos:</h6>
        <h5>🐶 Con proveedores de servicios de procesamiento de pagos, en caso de necesitar procesar transacciones financieras.</h5>
        <h5>🐶 Cuando esté legalmente requerido o para cumplir con obligaciones regulatorias.</h5>
        <br />
        <h5>4. Seguridad de la información</h5>
        <h6>Tomamos medidas de seguridad para proteger la información personal de nuestros clientes y sus mascotas, incluyendo el uso de medidas técnicas y organizativas apropiadas.</h6>
        <br />
        <h5>5. Acceso y control de la información</h5>
        <h6>Los clientes pueden acceder a su información personal, corregirla o eliminarla bajo solicitud. También pueden optar por no recibir comunicaciones de marketing de nuestra parte.</h6>
        <br />
        <h5>6. Cambios en la política de privacidad</h5>
        <h6>Nos reservamos el derecho de actualizar y modificar esta política de privacidad en cualquier momento. Las actualizaciones se publicarán en nuestro sitio web y entrarán en vigor inmediatamente.</h6>
        <br />
        <h5>7. Contacto</h5>
        <h6>Si tiene preguntas o preocupaciones sobre esta política de privacidad, puede comunicarse con nosotros a través de la siguiente información de contacto:</h6>
        <h6>Farmavet: 972 473 134</h6>
        <br />



      </SectionPage>
      <ComponentFooter />
    </PageArticle>
  )
}