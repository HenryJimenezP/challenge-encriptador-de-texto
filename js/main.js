const textareaMensaje = document.getElementById('textareaMensaje');
const textareaResultado = document.getElementById('textareaResultado');
const buttonEncriptar = document.getElementById('btnEncriptar');
const buttonDesencriptar = document.getElementById('btnDesencriptar');
const buttonCopiar = document.getElementById('btnCopiar');
var mostrar = document.getElementById('mostrar');
var ocultar = document.getElementById('ocultar');

function encriptar() {
    var encriptarMensaje = textareaMensaje.value
    .replaceAll('e', 'enter')
    .replaceAll('i', 'imes')
    .replaceAll('a', 'ai')
    .replaceAll('o', 'ober')
    .replaceAll('u', 'ufat');

    textareaResultado.getElementById = 'textareaResultado';
    textareaResultado.innerText = encriptarMensaje;
    
}

function msjEncriptar(){

    if(textareaMensaje.value === ""){
        alert("Favor de escribir al menos una palabra");
        mostrar.className = 'oculto';
        ocultar.className = 'cont-info';
    }else if(textareaMensaje.value.match(/^[a-z ]*$/)) {
            encriptar();
            mostrar.className = 'activo';
            ocultar.className = 'oculto';
            
        }
        else{
            alert("No se permiten caracteres especiales, ni MAYUSCULAS");
            textareaMensaje.value = '';
            mostrar.className = 'oculto';
            ocultar.className = 'cont-info';
        }
}

buttonEncriptar.onclick = msjEncriptar;