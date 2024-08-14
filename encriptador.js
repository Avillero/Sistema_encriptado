

const encriptar = document.getElementById("botonEncriptar");
const desencriptar = document.getElementById("botonDesencriptar");
const copiar = document.getElementById("botonCopiar");
const textoInicial = document.getElementById("ingresoTexto");
const textFinal = document.getElementById("mensajeFinal");
const imagen = document.getElementById("imagen");
const textInfo = document.getElementById("textoInfo");
const rigth = document.getElementById("rigth");
/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/
/*Arreglo de reemplazo con la clave de encriptacion*/
console.log(textoInicial);
let remplazar = [
	["e", "enter"],
	["o", "ober"],
	["i", "imes"],
	["a", "ai"],
	["u", "ufat"]
];
//Funcion del boton encriptar
encriptar.addEventListener('click', () => {

	const texto = textoInicial.value.toLowerCase();

	if (texto != "") {
		function encriptar(nuevoTexto) {
			for (let i = 0; i < remplazar.length; i++) {
				if (nuevoTexto.includes(remplazar[i][0])) {
					nuevoTexto = nuevoTexto.replaceAll(remplazar[i][0], remplazar[i][1]);
				};
			};
			return nuevoTexto;
		};
		remplace(encript(texto));
	} else {
		alert("Ingrese texto para encriptar");
		reset();
	};
    console.log(encriptar(texto))
});

/*
const remplace = (nuevoValor) => {
	textFinal.innerHTML = nuevoValor;
	textFinal.classList.add("ajustar");
	rigth.classList.add("ajuste")
	textoInicial.value = "";
	textoInicial.style.height = "auto"
	textoInicial.placeholder = "Ingrese el texto aquí";
	imagen.classList.add("ocultar");
	textInfo.classList.add("ocultar");
	copiar.classList.remove("bn_ocultar");
}

const reset = () => {
	textoInicial.value = "";
    textoInicial.style.height = "auto";
	textFinal.innerHTML = "";
	rigth.classList.remove("ajuste")
	textFinal.classList.remove("ajustar");
	imagen.classList.remove("ocultar");
	textFinal.placeholder = "Ningún mensaje fue encontrado";
	textInfo.classList.remove("ocultar")
	copiar.classList.add("bn_ocultar");
	textoInicial.focus();
};




desencriptar.addEventListener('click', () => {

	const texto = textoInicial.value.toLowerCase();

	if (texto != "") {
		function desencript(nuevoTexto) {
			for (let i = 0; i < remplazar.length; i++) {
				if (nuevoTexto.includes(remplazar[i][1])) {
					nuevoTexto = nuevoTexto.replaceAll(remplazar[i][1], remplazar[i][0]);
				};
			};
			return nuevoTexto;
		};
		remplace(desencript(texto));
	} else {
		alert("Ingrese texto a desencriptar");
		reset();
	};
});

copiar.addEventListener("click", () => {
	let texto = textFinal;
	texto.select();
	document.execCommand('copiar');
	//navigator.clipboard.writeText(texto.value);
	//clipboard función no compatible con móviles
	alert("Texto Copiado");
	reset();
});
//auto ajuste de textarea
textoInicial.addEventListener("change", e => {
	textoInicial.style.height = "auto";
	let scHeight = e.target.scrollHeight;
	textoInicial.style.height = `${scHeight}px`;
});
textoInicial.addEventListener("keyup", e => {
	textoInicial.style.height = "auto";
	let scHeight = e.target.scrollHeight;
	textoInicial.style.height = `${scHeight}px`;
});
*/