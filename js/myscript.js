//https://codepen.io/Draimy/pen/BQBBqL
//https://htmlcolorcodes.com/es/
//https://es.scribd.com/document/443945970/Adivinanzas-chinas
//https://www.youtube.com/watch?v=J-IVrJa_k2s
//https://www.youtube.com/watch?v=bkvLa8BI9zc
var score = 0;
function clickBtn() {
    score++;
    document.getElementById("score").innerHTML = "Poder Cultivado: " + score;

    if (score > 5) {
        document.body.style.backgroundColor = "#33E0FF";
        document.getElementById("nav_titulo").innerHTML = "The inmortal cultivation: Physical Complete";
        segundaPrueba();
        
    }
    if (score > 10) {
        document.body.style.backgroundColor = "#AF33FF";
        document.getElementById("nav_titulo").innerHTML = "The inmortal cultivation:Physical Complete and Mind Complete"
    }
    if (score > 15) {
        document.body.style.backgroundColor = "#FFB833";
        document.getElementById("nav_titulo").innerHTML = "The inmortal cultivation:Physical Complete , Mind Complete and Soul Complete"
    }
}
function segundaPrueba() {
    let texto = ["Felicidades por llegar hasta aquí ", "pero ahora tu camino a la ascensión se complicará aun más", "para ascender al siguiente paso deberas desarrollar tu mente en pos de la ascensión"]
    let preguntas = ["Este hombre tiene nombre de absoluta confusión pero lo que hace es decirnos cómo vivir con amor"
        , "Un príncipe que pensaba que Sidharta se llamó, se dedicó a ser un santo barrigón y bonachón"
        , "La casita de un gusano el campesino la transformó, en un kimono elegante, en bufanda y pantalón",
        "Para los soles y lluvias hay un sombrero alón, que le queda bien a todos, hasta al mas cabezón"
        , "Mil soldados muy furioso con pies de barro encontró un sembrador,pero nunca se asustó",]
    let respuestas = [""]
    for (i = 0; i >= texto.length - 1; i++) {
        //setTimeout(()=>{
            
            document.getElementById("preguntas").innerHTML ="".texto[i]
      //  }, 5000);
    }
}

