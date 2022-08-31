function encriptar(){
	var texto = document.getElementById("inputtexto").value.toLowerCase();
		// i es para que revise en toda la linea mayusculas y minusculas
		// g para que revise toda la oracion
		// m es para que revise en varias lineas 
	var txtEncriptar = texto.replace(/e/igm,"enter");
	var txtEncriptar = txtEncriptar.replace(/o/igm,"ober");
	var txtEncriptar = txtEncriptar.replace(/i/igm,"imes");
	var txtEncriptar = txtEncriptar.replace(/a/igm,"ai");
	var txtEncriptar = txtEncriptar.replace(/u/igm,"ufat");

	document.getElementById("imgDer").style.display = "none"; 
	document.getElementById("texto").style.display = "none"; 
	document.getElementById("texto2").innerHTML = txtEncriptar;
	document.getElementById("copiar").style.display = "show";
	document.getElementById("copiar").style.display = "inherit";
}

function desencriptar(){
	var texto = document.getElementById("inputtexto").value.toLowerCase();
		// i es para que revise en toda la linea mayusculas y minusculas
		// g para que revise toda la oracion
		// m es para que revise en varias lineas 
	var txtEncriptar = texto.replace(/enter/igm,"e");
	var txtEncriptar = txtEncriptar.replace(/ober/igm,"o");
	var txtEncriptar = txtEncriptar.replace(/imes/igm,"i");
	var txtEncriptar = txtEncriptar.replace(/ai/igm,"a");
	var txtEncriptar = txtEncriptar.replace(/ufat/igm,"u");

	document.getElementById("imgDer").style.display = "none"; 
	document.getElementById("texto").style.display = "none"; 
	document.getElementById("texto2").innerHTML = txtEncriptar;
	document.getElementById("copiar").style.display = "show";
	document.getElementById("copiar").style.display = "inherit";
}

function copy(){
	var contenido = document.querySelector("#texto2");
	contenido.select();
	document.execCommand("copy");
    alert("Texto Copiado"); 
}