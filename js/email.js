//Formulario página de Contactos

emailjs.init("yovpJSMj1nenugr1H");

const btnEnviar = document.querySelector(".boton-enviar");
const resultado = document.querySelector(".resultado");

btnEnviar.addEventListener("click", enviarEmail);

function enviarEmail() {
  //Obtener la data del formulario
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const correo = document.getElementById("correo").value;
  const celular = document.getElementById("celular").value;
  const mensaje = document.getElementById("comentario").value;
  const nombreCompleto = nombre + " " + apellido;

  const serviceID = "service_oqo39z4";
  const templateID = "template_2n1sp5k";

  var params = {
    name: nombreCompleto,
    sender: correo,
    phone: celular,
    message: mensaje,
  };
  //Enviar un correo usando EmailJS
  emailjs.send(serviceID, templateID, params).then(
    () => {
      resultado.innerHTML = "Envio exitoso";
      resultado.style.opacity = 1;
    },
    (error) => {
      resultado.innerHTML = "No se pudo hacer el envio";
      resultado.style.opacity = 1;
      console.log(error);
    }
  );
}
