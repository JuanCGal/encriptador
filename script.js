const textoUsuario = document.getElementById("textoUsuario");
const textoEncriptado = document.getElementById("textoEncriptado");
const mensajeVisualizar = document.querySelector(".principal__visualizar");
const botonCopiar = document.querySelector(".principal__visualizar__copiar");
const mensajeNoEncontrado = document.querySelector(".principal__visualizar__mensaje");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

/* FUNCIONES PARA ENCRIPTAR */

/* Función a ejecutar por el botón encriptar */
function btnEncriptar(){
    const encriptandoTexto = encriptar(textoUsuario.value);
    textoEncriptado.value = encriptandoTexto;
    textoUsuario.value = "";
    mensajeVisualizar.style.backgroundImage = "none";
    mensajeNoEncontrado.style.display = "none";
    botonCopiar.style.display = "block";
}

function encriptar(stringEncriptada){
    let matrizLlaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizLlaves.length; i++){
        if(stringEncriptada.includes(matrizLlaves[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizLlaves[i][0], matrizLlaves[i][1])
        }
    }

    return stringEncriptada;
}

/* FUNCIONES PARA DESENCRIPTAR */

/* Función a ejecutar por el botón desencriptar */
function btnDesencriptar(){
    const desencriptandoTexto = desencriptar(textoUsuario.value);
    textoEncriptado.value = desencriptandoTexto;
    textoUsuario.value = "";
    mensajeVisualizar.style.backgroundImage = "none";
    mensajeNoEncontrado.style.display = "none";
    botonCopiar.style.display = "block";
}

function desencriptar(mensajeEncriptado){
    let matrizLlaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    mensajeEncriptado = mensajeEncriptado.toLowerCase();

    for(let i = 0; i < matrizLlaves.length; i++){
        if(mensajeEncriptado.includes(matrizLlaves[i][1])){
            mensajeEncriptado = mensajeEncriptado.replaceAll(matrizLlaves[i][1], matrizLlaves[i][0])
        }
    }

    return mensajeEncriptado;
}

/* FUNCIÓN PARA COPIAR EL TEXTO ENCRIPTADO CON EL BOTÓN COPIAR */
function copiarDesdeBoton(){
    let textoEncriptado = document.getElementById("textoEncriptado").value;

    navigator.clipboard.writeText(textoEncriptado)
}

/* FUNCION PARA VALIDAR QUE SOLO SE ESCRIBAN LETRAS SIN ACENTOS */

textoUsuario.addEventListener('input', function(event){
    const valorTextoUsuario = event.target.value;
    const regex = /^[A-Za-zÑñ\s]+$/;
    let soloLetras = document.getElementById("soloLetras");

    if(!regex.test(valorTextoUsuario)){
        //Cambia el color del texto de advertencia a rojo si escriben caracteres no permitidos
        soloLetras.style.color = "red";

        //Reemplaza los caracteres no permitidos por un espacio vacío
        event.target.value = valorTextoUsuario.replace(/[^A-Za-zÑñ\s]/g, '');
    }else{
        //Regresa el color del texto de advertencia a su valor inicial
        soloLetras.style.color = 'initial';
    }
})
