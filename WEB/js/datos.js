/*Esta función guardará el nombre en datos locales*/
function PonerNombre()  
		    {
		    /*Si el nombre existe que se muestre*/
			if (localStorage.getItem("fname") != null) {
			/*Llamamos al DOM, buscamos el elemento llamado "user_name" y guardamos en él lo archivado en datos locales*/
			    document.getElementById("user_name").innerHTML = "¡Hola " + localStorage.getItem("fname") + "!";
			    }
			    else{
			    document.getElementById("user_name").innerHTML = "¡Hola!";	
			    }
		    }
function PonerDatos()
		    /*De la misma manera que en la función previa*/
		    {
			if ((localStorage.getItem("fcountry") != "") && (localStorage.getItem("fcountry") != null)) {
				document.getElementById("user_country").innerHTML = "País: " + localStorage.getItem("fcountry");
				}
			else{
				document.getElementById("user_country").innerHTML = "País: -";
			}
			if ((localStorage.getItem("fcity") != "") && (localStorage.getItem("fcity") != null)) {
				document.getElementById("user_city").innerHTML = "Ciudad: " + localStorage.getItem("fcity");
				}
			else{
				document.getElementById("user_city").innerHTML = "Ciudad: -";
			}				
			if ((localStorage.getItem("fgps") != "") && (localStorage.getItem("fgps") != null)) {
				document.getElementById("user_gps").innerHTML = "Localización: " + localStorage.getItem("fgps");
				}
			else{
				document.getElementById("user_gps").innerHTML = "Localización: -";
			}	
			/*En este caso no guardamos lo que queremos mostrar sino la fuente del enlace*/							
			document.getElementById("gmapa").href = "http://" + localStorage.getItem("fmaps");						
		    }

function GuardarDatos()  
			/*Guardamos desde el formulario de configuración los elementos SÓLO si la contraseña es válida*/
			{
			var paises = ["Albania",
						"Alemania",
						"Andorra",
						"Armenia",
						"Austria",
						"Azerbaiyán",
						"Bélgica",
						"Bielorrusia",
						"Bosnia-Herzegovina",
						"Bulgaria",
						"Chipre",
						"Ciudad del Vaticano",
						"Croacia",
						"Dinamarca",
						"Eslovaquia",
						"Eslovenia",
						"España",
						"Estonia",
						"Finlandia",
						"Francia",
						"Georgia",
						"Grecia",
						"Hungría",
						"Irlanda",
						"Islandia",
						"Italia",
						"Kazajistán",
						"Letonia",
						"Liechtenstein",
						"Lituania",
						"Luxemburgo",
						"Malta",
						"Moldavia",
						"Mónaco",
						"Montenegro",
						"Noruega",
						"Países Bajos",
						"Polonia",
						"Portugal",
						"Reino Unido",
						"República Checa",
						"República de Macedonia",
						"Rumanía",
						"Rusia",
						"San Marino",
						"Serbia",
						"Suecia",
						"Suiza",
						"Turquía",
						"Ucrania"];
						
			if (document.getElementById("pass").value == "123")
			{
				/*Sacamos un alert verificando el envío*/
				for(i=0; i<4; i++)
				{
				if(document.getElementById("country").value == paises[i])
				{
					var pais_correcto = "1";
				}
				}
				if(pais_correcto == "1")
				{
					
					if(("26" <= document.getElementById("temp_max").value) && (document.getElementById("temp_max").value <= "28"))
					{	
						if(("26" <= document.getElementById("temp_min").value) && (document.getElementById("temp_min").value<= "28"))
						{
							localStorage.setItem("fcountry", document.getElementById("country").value);
							alert("Envío correcto");
							window.location = "index.html";
							localStorage.setItem("fcity", document.getElementById("city").value);
							localStorage.setItem("fgps", document.getElementById("gps").value);
							localStorage.setItem("fmaps", document.getElementById("maps").value);
							localStorage.setItem("fpass", document.getElementById("pass").value);
							localStorage.setItem("fsensores", document.getElementById("sensores").value);
							localStorage.setItem("ffile1", document.getElementById("file1").value);
							localStorage.setItem("fdif_temp", document.getElementById("dif_temp").value);
						}
						else
						{
							alert("Temperatura mínima erronea");
							document.getElementById("temp_min").style.color = "red";	
							document.getElementById("temp_min").focus();	
						}
					}
					else
					{
						alert("Temperatura máxima erronea");	
						document.getElementById("temp_max").style.color = "red";
						document.getElementById("temp_max").focus();
					}
						
					
				}
				else{
					alert("País erroneo");	
					document.getElementById("country").style.color = "red";
					document.getElementById("country").focus();
				}
				
			}
			else{
			/*Alerta con contraseña incorrecta*/
				alert("¡Contraseña incorrecta!");
				document.getElementById("pass").focus();
				}
			}
			
function GuardarNombre()  
			{
			expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			if ( !expr.test(document.getElementById("email").value) )
				alert("Error: La dirección de correo " + document.getElementById("email").value + " es incorrecta.");
			else{
				alert("Hola " + document.getElementById("name").value);
				/*Cambiamos en el DOM el enlace de la página en la que estamos, es decir, redirigimos*/
				window.location = "index.html";
				var nombre = document.getElementById("name").value;
				localStorage.setItem("fname", nombre);
			}
			
			}
