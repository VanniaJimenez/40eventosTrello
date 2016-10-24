var boton = document.getElementById("boton");
var creartarea = document.getElementById("creartarea");
var tarea = document.getElementById("tarea");
var ul = document.getElementById("ul");
var divpadre = document.getElementById("divpadre");
	boton.onclick = function(){
		crearForm();
	};

function crearForm() {
		var div = document.createElement("div");
		divpadre.appendChild(div);
		var input = document.createElement("input");
		var button = document.createElement("button");
		div.appendChild(input);
		div.appendChild(button);
		button.onclick = function(){
			funcional();
		}

		function funcional(){
			console.log(input.value);
 			 if (input.value == "") {
  		alert("introduce una tarea");
  			} else{
  			crear();
  			};
		};

		function crear(){
			var txt = input.value;
			var t = document.createTextNode(txt);
			divpadre.appendChild(t);
			var textarea = document.createElement("textarea");
			var botonbebe = document.createElement("button");
			divpadre.appendChild(textarea);
			divpadre.appendChild(botonbebe);
		};

		input.value=""
	};




