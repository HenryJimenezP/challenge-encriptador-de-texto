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