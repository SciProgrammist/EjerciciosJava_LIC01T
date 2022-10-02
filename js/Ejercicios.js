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