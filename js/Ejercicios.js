
//js ejercicio 1
function Ins_Sort()
{
   let Nota1 = document.getElementById("Nota1").value; 
     let Nota2 = document.getElementById("Nota2").value;
     let Nota3 = document.getElementById("Nota3").value;
     let Nota4 = document.getElementById("Nota4").value;
     let Nota5 = document.getElementById("Nota5").value;
     let Nota6 = document.getElementById("Nota6").value;
     let Nota7 = document.getElementById("Nota7").value;
     let Nota8 = document.getElementById("Nota8").value;
     let Nota9 = document.getElementById("Nota9").value;
     let Nota10 = document.getElementById("Nota10").value;
    
  var i =0;
    
    if (Nota1==8.5)
        {
          i=i+1;  
        }
     if (Nota2==8.5)
        {
          i=i+1;  
        }
    if (Nota3==8.5)
        {
          i=i+1;  
        }
    if (Nota4==8.5)
        {
          i=i+1;  
        }
    if (Nota5==8.5)
        {
          i=i+1;  
        }
    if (Nota6==8.5)
        {
          i=i+1;  
        }
    if (Nota7==8.5)
        {
          i=i+1;  
        }
    if (Nota8==8.5)
        {
          i=i+1;  
        }
    if (Nota9==8.5)
        {
          i=i+1;  
        }
    if (Nota10==8.5)
        {
          i=i+1;  
        }
    
 
       
  document.getElementById("sort").innerHTML = ` 8.5 se repite ${i} veces`;  
}

function limpiar()
{
    document.getElementById("Nota1").value="";
    document.getElementById("Nota2").value="";
    document.getElementById("Nota3").value="";
    document.getElementById("Nota4").value="";
    document.getElementById("Nota5").value="";
    document.getElementById("Nota6").value="";
    document.getElementById("Nota7").value="";
    document.getElementById("Nota8").value="";
document.getElementById("Nota9").value="";
    document.getElementById("Nota10").value="";
    document.getElementById("sort").innerHTML = ``;   
    
}

// JS del Ejercicio 2

function valores() {
    let lunes = document.getElementById("lunes").value;
    let martes = document.getElementById("martes").value;
    let miercoles = document.getElementById("miercoles").value;
    let jueves = document.getElementById("jueves").value;
    let viernes = document.getElementById("viernes").value;
    let sabado = document.getElementById("sabado").value;
    let domingo = document.getElementById("domingo").value;

    if (lunes != "" && martes != "" && miercoles != "" && jueves != "" && viernes != "" && sabado != "" && domingo != "") {

        let arregloTemperaturas = new Array();
        arregloTemperaturas.push(new Array("lunes", Number(lunes)));
        arregloTemperaturas.push(new Array("martes", Number(martes)));
        arregloTemperaturas.push(new Array("miércoles", Number(miercoles)));
        arregloTemperaturas.push(new Array("jueves", Number(jueves)));
        arregloTemperaturas.push(new Array("viernes", Number(viernes)));
        arregloTemperaturas.push(new Array("sábado", Number(sabado)));
        arregloTemperaturas.push(new Array("domingo", Number(domingo)));

        mayor(arregloTemperaturas);
        menor(arregloTemperaturas);
    }
    else {
        alert('Debe llenar todos los campos');
    }
}
function mayor(arregloTemperaturas) {
    let mayor = 0;
    let dia = "";

    for (var i = 0; i < arregloTemperaturas.length; i++) {
        if (arregloTemperaturas[i][1] > mayor) {
            mayor = arregloTemperaturas[i][1];
            dia = arregloTemperaturas[i][0];
        }

    }

    document.getElementById("mayor").innerHTML = `El día más caliente fue el ${dia} con ${mayor}°C`;
}

function menor(arregloTemperaturas){
    let menor = 1000000000;
    let dia = "";

    for (var i = 0; i < arregloTemperaturas.length; i++) {
        if (arregloTemperaturas[i][1] < menor) {
            menor = arregloTemperaturas[i][1];
            dia = arregloTemperaturas[i][0];
        }

    }

    document.getElementById("menor").innerHTML = `El día más frío fue el ${dia} con ${menor}°C`;
}


//JS del Ejercicio 3
         function validar(valido){
            var nombres = document.querySelectorAll("#form input[type=text]");
            var notas = document.querySelectorAll("#form input[type=number]");
            

            for (var i = 0, element; element = nombres[i++];) {
               if(element.value==''){
                  alert('Favor completar los campos de nombre.');
                  valido = false;
                  element.focus();
                  return valido
               }else{
                  valido = true;
               }
             }
            for (var i = 0, element; element = notas[i++];) { //Sacamos notas y almacenamos en array
               if(element.value==''){
                  alert('Favor completar los campos de notas.');
                  valido = false;
                  element.focus();
                  return valido;
               }else{
                  if (element.value>=0 && element.value<=10){
                  valido = true;
                  }
                  else{
                  alert('La nota tiene que estar entre el rango de 0 y 10.');
                     valido = false;
                     element.focus();
                     return valido;
                  }
               }   
             }
            return valido;
         }
         var cont = 0; 
         function agregarFil(){ 
            var tabla = document.getElementById("tabla");
            var nFilas = document.querySelectorAll("#tabla tr").length;
         
             if (nFilas == 0) {
                 nFilas = 1;
             }
             cont = nFilas;
            var tabla = document.getElementsByTagName("tbody")[0] .insertRow((cont-1));
            var col2 = tabla.insertCell(0);
            var col3 = tabla.insertCell(1);
            var col4 = tabla.insertCell(2);
            var col5 = tabla.insertCell(3);
            var col6 = tabla.insertCell(4);
         
            col2.innerHTML = '<input type="text" class="form-control" placeholder="Alumno" required="">';
            col3.innerHTML = '<input type="number" class="form-control" placeholder="Nota 1" name="notaAl3" min="0" max="10">';
            col4.innerHTML = '<input type="number" class="form-control" placeholder="Nota 2" name="notaAl3" min="0" max="10">';
            col5.innerHTML = '<input type="number" class="form-control" placeholder="Nota 3" name="notaAl3" min="0" max="10">';
            col6.innerHTML = '<button type="button"  class="btn btn-danger" id="elim' + cont + '" onclick="eliminarFila(this)"><i class="fas fa-times"></i></button>';
         
            cont++;
         }
         function eliminarFila(element) {
             var fila = element.parentNode.parentNode;
           
             fila.remove();
          }
         function procesar() {
             var valido = false;
             if(!validar()){
              return;
             }
             var nombres = document.querySelectorAll("#form input[type=text]");
             var notas = document.querySelectorAll("#form input[type=number]");
             var bodyTabla = document.getElementById("bodyPromedios");
             var notasArr = [];
             var arrNombres = [];
             var matriz = [];
             var notasFin = [];
             var promedio = 0;
             var fila = "";
             var arrTemp = [];
             var contaArra = 0;
         
             for (var i = 0, element; element = nombres[i++];) { //Sacamos los nombres digitados y almacenamos en array
                 arrNombres.push(element.value);
             }
         
             for (var i = 0, element; element = notas[i++];) { //Sacamos notas y almacenamos en array
                 notasArr.push(element.value);
             }
         
             for (i = 0; i < notasArr.length; i++){ //Cortamos dinamicamente el arreglo completo de notas (de 3 en 3) para meterlos a la matriz
                arrTemp.push(notasArr[i]);
                contaArra++;
                if(contaArra == 3){
                  matriz.push(arrTemp);
                  contaArra = 0;
                  arrTemp=[];
                }
             }
         
             for (x = 0; x < matriz.length; x++) { //Recorremos la matriz para sacar promedios
                 promedio = 0;
                 for (y = 0; y < matriz[x].length; y++) { //Sumamos las notas de cada alumno
                     promedio += parseFloat(matriz[x][y]);
                 }
                 promedio = parseFloat(promedio / 3);
                 notasFin.push(promedio.toFixed(2)); //Guardamos en arreglo para posteriormente imprimir
             }
           
         
             for (i = 0; i < notasFin.length; i++) { //Imprimimos el promedio por alumno en una tabla
                 fila += '<tr  id="fila' + i + '">' +
                       '<th scope="row">' + (i+1) + '</th>' +
                       '<td>'+ arrNombres[i] +'</td>' +
                       '<td>'+ notasFin[i] +'</td>' +
                       '<td><button type="button" class="btn btn-danger" id="elim1" onclick="eliminarFila(this)">'+
                       ' <i class="fas fa-times"></i></button> '+
                       '</td>'+
                       '</tr>';
               bodyTabla.innerHTML = fila; 
             }
         }
         function validarCampos(){
         
         }

//JS del Ejercicio 4
function InsertionSort()
{
    var ascArray = new Array();
    ascArray[0] = Number(document.getElementById('numberx').value);
    ascArray[1] = Number(document.getElementById('numbery').value);
    ascArray[2] = Number(document.getElementById('numberz').value);
    //The first loop helps us to fix the first element of the array and get the sorted part.
    for (let current = 1; current < ascArray.length;current++)
        {
            //Between this for loop will have to start to shrink the unsorted part of the array
            let Check = current;
            while((Check>0)&&(ascArray[Check]<ascArray[Check-1]))
                {
                    let swap = ascArray[Check-1];
                    ascArray[Check-1]= ascArray[Check];
                    ascArray[Check]=swap;
                    Check--;
                }
            
    
        }
    
    document.getElementById('txtOrdenado').value = ascArray.toString();
    
}

// js ejercicio 5
function Perimetro()
{
    let lado = document.getElementById("medida").value; 
    var resultado;
    resultado=4*lado;
    document.getElementById("TotalPeri").innerHTML = `El perimetro del cuadrado es ${resultado} cm`;
    
}

//JS de Ejercicio 6
function abreSitio() {
    var web = document.form1.sitio.options[document.form1.sitio.selectedIndex].value;
    window.open(web, '_self');
}

function dividir() {
    var dividendo = Number(document.getElementById('txtnum1').value);
    var divisor = Number(document.getElementById('txtnum2').value);
    var resp;

    resp = dividendo / divisor;
    document.getElementById('txtresp').value = `La división de ${dividendo} entre ${divisor} da: ${resp}`;

    //limpiamos txt
    document.getElementById('txtnum1').value = "";
    document.getElementById('txtnum2').value = "";
}

function cubo() {
    var num = Number(document.getElementById('txtnum').value);
    var elevar;

    elevar = Math.pow(num, 3);
    document.getElementById('txtresp').value = `El número ${num} elevado al cubo es: ${elevar}`;

    //limpiamos txt
    document.getElementById('txtnum').value = "";
}

function imc() {
    var peso = Number(document.getElementById('peso').value);
    var h = Number(document.getElementById('altura').value);
    var imcR;

    imcR = Math.round(peso / (Math.pow(h, 2)));
    document.getElementById('txtresp').value = `Su IMC es de ${imcR} kg/m`;

    //limpiamos txt
    document.getElementById('peso').value = "";
    document.getElementById('altura').value = "";
}


