const URL_GOOGLE_SHEETS =
    "https://script.google.com/macros/s/AKfycbxS4psTD2cR2ALfm8hXhJ6elUI--nVN02D7uRtG5LdwVhrhtHsBRukv_2bUOCX_r-x3/exec";


const formulario =
    document.getElementById("formulario");

const mensaje =
    document.getElementById("mensaje");


formulario.addEventListener("submit", async function(event) {

    event.preventDefault();


    const nombre =
        document.getElementById("nombre").value;

    const telefono =
        document.getElementById("telefono").value;

    const asistencia =
        document.getElementById("asistencia").value;


    const datos = {

        nombre: nombre,

        telefono: telefono,

        asistencia: asistencia

    };


    mensaje.innerHTML = "Registrando asistencia...";


    try {

        await fetch(URL_GOOGLE_SHEETS, {

            method: "POST",

            mode: "no-cors",

            headers: {
                "Content-Type": "text/plain"
            },

            body: JSON.stringify(datos)

        });


        mensaje.innerHTML =
            "🍻 ¡Listo! Tu asistencia fue registrada.";

        formulario.reset();


    } catch (error) {

        console.error(error);

        mensaje.innerHTML =
            "❌ Ocurrió un error al registrar.";

    }

});