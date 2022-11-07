var score = 0;
//funcion para el cliker
function clickBtn() {
    score++;
    document.getElementById("score").innerHTML = "Poder Cultivado: " + score;

    if (score > 10) {
        document.body.style.backgroundColor = "#33E0FF";
        document.getElementById("nav_titulo").innerHTML = "The inmortal cultivation: Physical Complete";
    
    }
    if (score > 20) {
        document.body.style.backgroundColor = "#AF33FF";
        document.getElementById("nav_titulo").innerHTML = "The inmortal cultivation:Physical Complete and Mind Complete"
        const p =document.createElement("p")
        p.textContent=''
    }
    if (score > 40) {
        document.body.style.backgroundColor = "#FFB833";
        document.getElementById("nav_titulo").innerHTML = "The inmortal cultivation:Physical Complete , Mind Complete and Soul Complete"
       
    }
}
//funcion para las preguntas y contabilizar aciertos
function resultado() {
    var p1, p2, p3, p4, nota;

    if (document.getElementById('p1').checked == true) { p1 = 1 }
    else { p1 = 0 }
    if (document.getElementById('p6').checked == true) { p2 = 1 }
    else { p2 = 0 }
    if (document.getElementById('p11').checked == true) { p3 = 1 }
    else { p3 = 0 }
    if (document.getElementById('p16').checked == true) { p4 = 1 }
    else { p4 = 0 }
    nota = p1 + p2 + p3 + p4;
    if (nota >= 3) {
        score=score+10;
        document.getElementById("score").innerHTML = "Poder Cultivado: " + score;
    }else{
        location.reload();
    }
}
//Guardar el elemento
const mainCanvas = document.getElementById("main-canvas");
const context = mainCanvas.getContext("2d");
let initialX;
let initialY;
const dibujar = (cursorX, cursorY) => {
  context.moveTo(initialX, initialY);//las coordenadas
  context.lineWidth = 10;//la anchura de la linea
  context.strokeStyle = "#000";//color de la linea
  context.lineCap = "round";//linea redondeada
  context.lineTo(cursorX, cursorY);//para comenzar en un sitio
  context.stroke();//seguir el camino de la linea y pintarla
  initialX = cursorX; //x del cursor
  initialY = cursorY; //y del cursor
};
//cuando presiona el boton del raton
const mouseDown = (evt) => {
  initialX = evt.offsetX;
  initialY = evt.offsetY;
  dibujar(initialX, initialY);
  mainCanvas.addEventListener("mousemove", mouseMoving);
};
//cuando esta en movimiento el raton
const mouseMoving = (evt) => {
  dibujar(evt.offsetX, evt.offsetY);
};
//cuando suelte el boton del raton 
const mouseUp = () => {
  mainCanvas.removeEventListener("mousemove", mouseMoving);
};
mainCanvas.addEventListener("mousedown", mouseDown);
mainCanvas.addEventListener("mouseup", mouseUp);