const presentacionTexto= document.getElementById("presentacionTexto");
const botonEncriptar= document.getElementById("botonEncriptar");
const botonDesencriptar=document.getElementById("botonDesencriptar");
const botonCopiar=document.getElementById("botonCopiar");
const mensajeFinal=document.getElementById("mensajeFinal");
const muñeco = document.getElementById("muñeco");
const derechaInfo = document.getElementById("derechaInfo");
const presentacionDerecha = document.getElementById("presentacionDerecha");


let remplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]


botonEncriptar.addEventListener("click" , () => {
    const texto = presentacionTexto.value.toLowerCase()
    function encriptar(nuevoTexto) {
        for(let i = 0; i< remplazar.length; i++){
            if(nuevoTexto.includes(remplazar[i][0])) {
                nuevoTexto= nuevoTexto.replaceAll(remplazar[i][0], remplazar[i][1])
            };
        };
        return nuevoTexto
    }
    const textoEncriptado = encriptar(texto);

    mensajeFinal.innerHTML = textoEncriptado;

    muñeco.style.display = "none";
    presentacionTexto.value = ""
    derechaInfo.style.display = "none";
    botonCopiar.style.display = "block";
    presentacionDerecha.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
});

botonDesencriptar.addEventListener("click", ()=> {
    const texto = presentacionTexto.value.toLowerCase()
    function desencriptar(nuevoTexto) {
        for(let i = 0; i < remplazar.length; i++){
            if (nuevoTexto.includes(remplazar[i][1])) {
                nuevoTexto = nuevoTexto.replaceAll(remplazar[i][1], remplazar[i][0])
            }
        }
        return nuevoTexto
    }
    const textoDesencriptado = desencriptar(texto);
    mensajeFinal.innerHTML = textoDesencriptado;

    muñeco.style.display = "none";
    presentacionTexto,value =""
    derechaInfo.style.display = "none";
    botonCopiar.style.display = "block";
    presentacionDerecha.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
})

botonCopiar.addEventListener("click", () => {
    let texto = mensajeFinal;
    navigator.clipboard,writeText(texto.value);
    alert("Texto copiado");
})
