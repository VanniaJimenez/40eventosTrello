 var boton = document.getElementById("boton");
 var divpadre = document.getElementById("divpadre");
 var divmadre = document.getElementById("divmadre");
 	
 boton.onclick= function(){

 	var input = document.createElement("input");
 	var button = document.createElement("button");
 	button.innerHTML= "Guardar";
 	button.className = "btn btn-primary";
 	divmadre.appendChild(input);
 	divmadre.appendChild(button);
 	var bienvenido = document.getElementById("bienvenido");
 	var simplon = document.getElementById("simplon");
 	bienvenido.style.display ="none";
 	simplon.style.display= "none";
 	boton.style.display ="none";

 	button.onclick =function(){
 		
 		var div = document.createElement("div"); // se crea el div que es el padre verdadero del boton y del h2

 		var botonCrear = document.createElement("button"); //se creo el segundo boton
 		botonCrear.innerHTML = "añadir lista"; //texto del segundo boton
 		var nombreLista = input.value; //se guarda el valor de input
 		var h2 = document.createElement("h2"); // se crea elemento que va a contener el titulo (input)
 		var texto = document.createTextNode(nombreLista); //se guarda como nodo de texto el valor de input
 		h2.appendChild(texto); // h2 imprime input
 		div.appendChild(h2); //h2 es hijo de div padre (es cuando se ve, preguntarle al muchacho (Irving) por el espacio horizontal)
 		input.value = ""; // input vuelve a su valor original
 		div.appendChild(botonCrear);//botoncrear pertenece a div padre de ahora a la eternidad
 		botonCrear.className = "btn btn-primary";//clase del boton
 		div.setAttribute("class", "col-lg-3"); //
 		divpadre.appendChild(div);// div padre es padre de div por lo tanto abuelo del boton y del h2

 		botonCrear.onclick= function (){
 			var textarea = document.createElement("textarea");
 			div.appendChild(textarea);
 			textarea.className = "bloque";
 			var botoncito = document.createElement("button");
 			div.appendChild(botoncito);
 			botoncito.className="btn ";
 			botoncito.innerHTML = "crear tarea";

 			botoncito.onclick = function(){
 				var textito = textarea.value;
 				var parrafo = document.createElement("p");
 				var texta= document.createTextNode(textito);
 				parrafo.appendChild(texta);
 				div.appendChild(parrafo);
 				botoncito.style.display ="none";
 				textarea.style.display ="none";
 			};

 		};
 	};

 };