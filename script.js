const textoEntrada = document.querySelector(".text_input");
const textoSalida = document.querySelector(".mensaje_encriptado");

function btnencriptar() {
    const error = condiciones(textoEntrada.value);
    const txtencriptado = encriptar(textoEntrada.value);
    textoSalida.value = txtencriptado;
    textoEntrada.value = "";
}

function encriptar(msj_encriptado) {
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    msj_encriptado = msj_encriptado.toLowerCase();

    for (let i = 0; i < matriz.length; i++) {
        if (msj_encriptado.includes(matriz[i][0])) {
            msj_encriptado = msj_encriptado.replaceAll(matriz[i][0], matriz[i][1]);
        }
    }
    return msj_encriptado;
}

function desencriptar(msj_desencriptado) {
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    msj_desencriptado = msj_desencriptado.toLowerCase();
    let match = 0;

    for (let i = 0; i < matriz.length; i++) {
        if (msj_desencriptado.includes(matriz[i][1])) {
            msj_desencriptado = msj_desencriptado.replaceAll(matriz[i][1], matriz[i][0]);
        }
        
    }

    return msj_desencriptado;
}



function btndesencripta() {
    const txtdesencriptarEntrada = desencriptar(textoEntrada.value);

    textoEntrada.value = txtdesencriptarEntrada;

    const txtdesencriptarSalida = desencriptar(textoSalida.value);

    textoSalida.value = txtdesencriptarSalida;
    
}


function condiciones() {
    const inputText = textoEntrada.value;
    const mayus = /[A-Z]/g;
    const carEspeciales = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;

    if (inputText.match(mayus) || inputText.match(carEspeciales)) {
        textoSalida.style.backgroundImage = "url('imagenes/error.gif')";
        textoSalida.style.backgroundSize = "100% 100%"; 
        textoSalida.style.backgroundRepeat = "no-repeat";
        
    } else {
        textoSalida.style.backgroundImage = ""
    }
}


function copiarTexto() {
    var texto = document.getElementsByClassName("mensaje_encriptado")[0];
    texto.select();
    texto.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}
