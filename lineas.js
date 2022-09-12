//alert("mensaje")
//canvas
var tap = document.getElementById("tablero");
var lienzo = tap.getContext("2d");
//boton limpiar 
var clean = document.getElementById("limpiar")
clean.addEventListener("click", limpiar);
//boton dibujar 
var draw = document.getElementById("dibujar")
draw.addEventListener("click", startdraw);
//solicitar cantidad de lineas 
var lineas = document.getElementById("cantidadlineas");


DibujarLinea("#000000", 0, 0, 300, 0);
DibujarLinea("#000000 ", 0, 0, 0, 300);
DibujarLinea("#000000 ", 300, 0, 300, 300);
DibujarLinea("#000000 ", 0, 300, 300, 300);


function DibujarLinea(color , xi, yi, xf, yf)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xi, yi);
lienzo.lineTo(xf, yf);
lienzo.stroke();
lienzo.closePath();
}

function startdraw()
{
var lin = lineas.value
var espacio = 300/lin

var color1 =document.getElementById("color1").value
var color2 =document.getElementById("color2").value
var color3 =document.getElementById("color3").value
var color4 =document.getElementById("color4").value
for(l = 0; l< lin; l ++)
{
    
    DibujarLinea(color2, espacio*l, 0, 300, espacio*(l+1));
    DibujarLinea(color3, espacio*(l+1), 300, 0, espacio*l);
    DibujarLinea(color4, espacio*l, 300, 300, 300-espacio*(l+1));
    DibujarLinea(color1, 300-espacio*l, -l*0, 0, espacio*(l+1) );
    
}

}

function limpiar()
{
    lienzo.clearRect(1, 1, 298, 298);
}