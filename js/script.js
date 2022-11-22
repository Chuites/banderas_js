window.onload=esconderBanderas();

function esconderBanderas()
{
    //alert("Si entra")
    document.getElementById('ejercicio1').style.display = "none";
    document.getElementById('ejercicio2').style.display = "none";
    document.getElementById('ejercicio3').style.display = "none";
    document.getElementById('ejercicio4').style.display = "none";
    document.getElementById('ejercicio5').style.display = "none";
}


function cambiarBandera()
{
    let seleccion
    seleccion = document.getElementById('selector').value;
    seleccion = seleccion * 1;
    switch (seleccion) {
        case 0:
            //alert("Limpiar");
            document.getElementById('ejercicio1').style.display = "none";
            document.getElementById('ejercicio2').style.display = "none";
            document.getElementById('ejercicio3').style.display = "none";
            document.getElementById('ejercicio4').style.display = "none";
            document.getElementById('ejercicio5').style.display = "none";
            break;
        case 1:
            //alert("Guatemala");
            document.getElementById('ejercicio1').style.display = "block";
            document.getElementById('ejercicio2').style.display = "none";
            document.getElementById('ejercicio3').style.display = "none";
            document.getElementById('ejercicio4').style.display = "none";
            document.getElementById('ejercicio5').style.display = "none";
            break;
        case 2:
            //alert ("Guatemala 2");
            document.getElementById('ejercicio1').style.display = "none";
            document.getElementById('ejercicio2').style.display = "block";
            document.getElementById('ejercicio3').style.display = "none";
            document.getElementById('ejercicio4').style.display = "none";
            document.getElementById('ejercicio5').style.display = "none";
            break;
        case 3:
            //alert ("Guatemala 3");
            document.getElementById('ejercicio1').style.display = "none";
            document.getElementById('ejercicio2').style.display = "none";
            document.getElementById('ejercicio3').style.display = "block";
            document.getElementById('ejercicio4').style.display = "none";
            document.getElementById('ejercicio5').style.display = "none";
            break;
        case 4:
            //alert ("Guatemala 4");
            document.getElementById('ejercicio1').style.display = "none";
            document.getElementById('ejercicio2').style.display = "none";
            document.getElementById('ejercicio3').style.display = "none";
            document.getElementById('ejercicio4').style.display = "block";
            document.getElementById('ejercicio5').style.display = "none";
            break;
        case 5:
            //alert ("Guatemala 5");
            document.getElementById('ejercicio1').style.display = "none";
            document.getElementById('ejercicio2').style.display = "none";
            document.getElementById('ejercicio3').style.display = "none";
            document.getElementById('ejercicio4').style.display = "none";
            document.getElementById('ejercicio5').style.display = "block";
            break;
        default:
            break;
    }

}