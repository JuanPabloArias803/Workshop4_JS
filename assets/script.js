//global variables
let correctChoice=0;
const scoreboard=document.querySelector("#scoreboard");
//Seccion 1

//Ejercicio 1

//Pregunta1
const question1_btn_true=document.querySelector("#question1_btn_true");
const question1_btn_false=document.querySelector("#question1_btn_false");
const question1_answer=document.querySelector("#question1_answer");
const modify_question1_true=function(){
    question1_answer.innerHTML="Correcto! El programa logra acceder a cada una de las variables ya que:<br>- 'blockVariable' se usa dentro del bloque if donde fue definida.<br>- 'functionVariable' se usa dentro de la función donde fue definida.<br>- 'globalVariable' puede ser accedida desde cualquier lugar del código."
    question1_answer.style.display="block";
    question1_answer.style.textAlign="center";
    question1_answer.style.color="green";
    correctChoice++;
    scoreboard.innerHTML=correctChoice;
    question1_btn_true.style.display="none";
    question1_btn_false.style.display="none";
}
const modify_question1_false=function(){
    question1_answer.innerHTML="Incorrecto... El programa logra acceder a cada una de las variables ya que:<br>- 'blockVariable' se usa dentro del bloque if donde fue definida.<br>- 'functionVariable' se usa dentro de la función donde fue definida.<br>- 'globalVariable' puede ser accedida desde cualquier lugar del código."
    question1_answer.style.display="block";
    question1_answer.style.textAlign="center";
    question1_answer.style.color="red";
    question1_btn_true.style.display="none";
    question1_btn_false.style.display="none";
}
question1_btn_true.addEventListener("click",modify_question1_true);
question1_btn_false.addEventListener("click",modify_question1_false);

//Pregunta 2
const question2_btn_true=document.querySelector("#question2_btn_true");
const question2_btn_false=document.querySelector("#question2_btn_false");
const question2_answer=document.querySelector("#question2_answer");
const modify_question2_true=function(){
    question2_answer.innerHTML="Incorrecto... Recuerda que:<br>- Las variables globales (globalVariable) son las únicas que pueden ser accedidas desde cualquier lugar del código.<br>- Las variables locales (functionVariable), declaradas dentro de funciones, solamente pueden ser accedidas desde dentro de la función donde fueron declaradas.<br>- Las variables de bloque (blockVariable), declaradas dentro de un bloque de código {}, solamente pueden ser accedidas desde dentro del bloque donde se definieron.";
    question2_answer.style.display="block";
    question2_answer.style.textAlign="center";
    question2_answer.style.color="red";
    question2_btn_true.style.display="none";
    question2_btn_false.style.display="none";
}
const modify_question2_false=function(){
    question2_answer.innerHTML="Correcto! La tienes clara, recuerda que:<br>- Las variables globales (globalVariable) son las únicas que pueden ser accedidas desde cualquier lugar del código.<br>- Las variables locales (functionVariable), declaradas dentro de funciones, solamente pueden ser accedidas desde dentro de la función donde fueron declaradas.<br>- Las variables de bloque (blockVariable), declaradas dentro de un bloque de código {}, solamente pueden ser accedidas desde dentro del bloque donde se definieron.";
    question2_answer.style.display="block";
    question2_answer.style.textAlign="center";
    question2_answer.style.color="green";
    correctChoice++;
    scoreboard.innerHTML=correctChoice;
    question2_btn_true.style.display="none";
    question2_btn_false.style.display="none";
}
question2_btn_true.addEventListener("click",modify_question2_true);
question2_btn_false.addEventListener("click",modify_question2_false);

//Ejercicio2

//Pregunta 3
const question3_btn_true=document.querySelector("#question3_btn_true");
const question3_btn_false=document.querySelector("#question3_btn_false");
const question3_answer=document.querySelector("#question3_answer");
const modify_question3_true=function(){
    question3_answer.innerHTML="Incorrecto...<br>Debido al hoisting, las variables declaradas con la palabra reservada var se 'elevan' y son inicializadas con 'undefined'. Al accederla antes de su declaración el resultado es 'Valor de a: undefined'";
    question3_answer.style.display="block";
    question3_answer.style.textAlign="center";
    question3_answer.style.color="red";
    question3_btn_true.style.display="none";
    question3_btn_false.style.display="none";
}
const modify_question3_false=function(){
    question3_answer.innerHTML="Correcto!<br>Debido al hoisting, las variables declaradas con la palabra reservada 'var' y llamadas antes de su declaración son retornadas como 'undefined'. El resultado es 'Valor de a:undefined'.";
    question3_answer.style.display="block";
    question3_answer.style.textAlign="center";
    question3_answer.style.color="green";
    correctChoice++;
    scoreboard.innerHTML=correctChoice;
    question3_btn_true.style.display="none";
    question3_btn_false.style.display="none";
}
question3_btn_true.addEventListener("click",modify_question3_true);
question3_btn_false.addEventListener("click",modify_question3_false);

//Pregunta 4
const question4_btn_true=document.querySelector("#question4_btn_true");
const question4_btn_false=document.querySelector("#question4_btn_false");
const question4_answer=document.querySelector("#question4_answer");
const modify_question4_true=function(){
    question4_answer.innerHTML="Incorrecto...<br>Debido al hoisting, las variables declaradas con la palabra reservada 'let' también se 'elevan' pero no son inicializadas sino que se mantienen en la temporal dead zone hasta su declaración. Al accederla antes de su declaración el resultado es un error provocado por la temporal dead zone.";
    question4_answer.style.display="block";
    question4_answer.style.textAlign="center";
    question4_answer.style.color="red";
    question4_btn_true.style.display="none";
    question4_btn_false.style.display="none";
}
const modify_question4_false=function(){
    question4_answer.innerHTML="Correcto!<br>Debido al hoisting, las variables declaradas con la palabra reservada 'let' también se 'elevan' pero no son inicializadas sino que se mantienen en la temporal dead zone hasta su declaración. Al accederla antes de su declaración el resultado es un error provocado por la temporal dead zone.";
    question4_answer.style.display="block";
    question4_answer.style.textAlign="center";
    question4_answer.style.color="green";
    correctChoice++;
    scoreboard.innerHTML=correctChoice;
    question4_btn_true.style.display="none";
    question4_btn_false.style.display="none";
}
question4_btn_true.addEventListener("click",modify_question4_true);
question4_btn_false.addEventListener("click",modify_question4_false);

//Pregunta 5
const question5_btn_true=document.querySelector("#question5_btn_true");
const question5_btn_false=document.querySelector("#question5_btn_false");
const question5_answer=document.querySelector("#question5_answer");
const modify_question5_true=function(){
    question5_answer.innerHTML="Correcto!<br>Al igual que las variables declaradas con la palabra reservada 'let', las constantes declaradas con la palabra reservada const se 'elevan' por el hoisting pero se mantienen en la temporal dead zone hasta su declaración, por lo que retorna un error si es accedida antes de su declaración."
    question5_answer.style.display="block";
    question5_answer.style.textAlign="center";
    question5_answer.style.color="green";
    correctChoice++;
    scoreboard.innerHTML=correctChoice;
    question5_btn_true.style.display="none";
    question5_btn_false.style.display="none";
}
const modify_question5_false=function(){
    question5_answer.innerHTML="Incorrecto...<br>Al igual que las variables declaradas con la palabra reservada 'let', las constantes declaradas con la palabra reservada const se 'elevan' por el hoisting pero se mantienen en la temporal dead zone hasta su declaración, por lo que retorna un error si es accedida antes de su declaración."
    question5_answer.style.display="block";
    question5_answer.style.textAlign="center";
    question5_answer.style.color="red";
    question5_btn_true.style.display="none";
    question5_btn_false.style.display="none";
}
question5_btn_true.addEventListener("click",modify_question5_true);
question5_btn_false.addEventListener("click",modify_question5_false);

//Pregunta 6
const question6_btn_true=document.querySelector("#question6_btn_true");
const question6_btn_false=document.querySelector("#question6_btn_false");
const question6_answer=document.querySelector("#question6_answer");
const modify_question6_true=function(){
    question6_answer.innerHTML="Incorrecto...<br>Las funciones declaradas son aquellas que inician con la palabra reservada 'function' seguido del nombre que se le dará. Estás funciones son 'elevadas' por el hoisting y pueden ser ejecutadas antes de su declaración. En este caso el console.log retornará 'Resultado de funcionDeclarada:Función declarada ha sido llamada.'";
    question6_answer.style.display="block";
    question6_answer.style.textAlign="center";
    question6_answer.style.color="red";
    question6_btn_true.style.display="none";
    question6_btn_false.style.display="none";
}
const modify_question6_false=function(){
    question6_answer.innerHTML="Correcto!<br>Las funciones declaradas son aquellas que inician con la palabra reservada 'function' seguido del nombre que se le dará. Estás funciones son 'elevadas' por el hoisting y pueden ser ejecutadas antes de su declaración. En este caso el console.log retornará 'Resultado de funcionDeclarada:Función declarada ha sido llamada.'";
    question6_answer.style.display="block";
    question6_answer.style.textAlign="center";
    question6_answer.style.color="green";
    correctChoice++;
    scoreboard.innerHTML=correctChoice;
    question6_btn_true.style.display="none";
    question6_btn_false.style.display="none";
}
question6_btn_true.addEventListener("click",modify_question6_true);
question6_btn_false.addEventListener("click",modify_question6_false);

//Pregunta 7
const question7_btn_true=document.querySelector("#question7_btn_true");
const question7_btn_false=document.querySelector("#question7_btn_false");
const question7_answer=document.querySelector("#question7_answer");
const modify_question7_true=function(){
    question7_answer.innerHTML="Correcto!<br>Las funciones expresadas son aquellas que se almacenan dentro de la palabra reservada 'const'. Al guardarse dentro de un const el hoisting las 'eleva' y las coloca en la temporal dead zone por lo que al intentar ejecutarlas antes de su definición retornarán un error."
    question7_answer.style.display="block";
    question7_answer.style.textAlign="center";
    question7_answer.style.color="green";
    correctChoice++;
    scoreboard.innerHTML=correctChoice;
    question7_btn_true.style.display="none";
    question7_btn_false.style.display="none";
}
const modify_question7_false=function(){
    question7_answer.innerHTML="Incorrecto...<br>Las funciones expresadas son aquellas que se almacenan dentro de la palabra reservada 'const'. Al guardarse dentro de un const el hoisting las 'eleva' y las coloca en la temporal dead zone por lo que al intentar ejecutarlas antes de su definición retornarán un error."
    question7_answer.style.display="block";
    question7_answer.style.textAlign="center";
    question7_answer.style.color="red";
    question7_btn_true.style.display="none";
    question7_btn_false.style.display="none";
}
question7_btn_true.addEventListener("click",modify_question7_true);
question7_btn_false.addEventListener("click",modify_question7_false);