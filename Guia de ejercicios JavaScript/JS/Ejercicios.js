//JS de Ejercicio 6
function abreSitio(){
    var web = document.form1.sitio.options[document.form1.sitio.selectedIndex].value;
    window.open(web, '_self');
}

function dividir()
{
    var dividendo = Number(document.getElementById('txtnum1').value);
    var divisor = Number(document.getElementById('txtnum2').value);
    var resp;

    resp = dividendo / divisor;
    document.getElementById('txtresp').value = `La división de ${dividendo} entre ${divisor} da: ${resp}`;

    //limpiamos txt
    document.getElementById('txtnum1').value = "";
    document.getElementById('txtnum2').value = "";
}

function cubo()
{
    var num = Number(document.getElementById('txtnum').value);
    var elevar;

    elevar = Math.pow(num,3);
    document.getElementById('txtresp').value=`El número ${num} elevado al cubo es: ${elevar}`;

    //limpiamos txt
    document.getElementById('txtnum').value = "";
}

function imc()
{
    var peso = Number(document.getElementById('peso').value);
    var h = Number(document.getElementById('altura').value);
    var imcR;

    imcR = Math.round(peso / (Math.pow(h,2)));
    document.getElementById('txtresp').value = `Su IMC es de ${imcR} kg/m`;

    //limpiamos txt
    document.getElementById('peso').value = "";
    document.getElementById('altura').value = "";
}