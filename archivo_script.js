// JavaScript Document

/*function bienvenida(){

alert("bienvenidos a aprendiendo java script");
						
					}
					
					
function ejecuta(){
	
	onclick=saludos();
	onclick=bienvenida();
	
	
}
function saludos(){

alert("jajaj solucionado");

}
window.onload=ejecuta;*/

var foto;

function tipofoto(){
alert ("aqui tenemos tu foto");
}

function manejarfoto(){
	
	foto = document.getElementsByTagName("img")[0];
	

	foto.addEventListener("click",tipofoto,false);
	foto.addEventListener("mouseover",crecer,false);
	foto.addEventListener("mouseout",menguar,false);
	
}

function crecer(){
	
	foto.width=225;
	foto.height=225;
}

function menguar(){
	
	foto.width=200;
	foto.height=200;
}

window.onload=manejarfoto;