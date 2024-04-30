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
    question1_answer.style.display="inline";
    question1_answer.style.textAlign="center";
    question1_answer.style.color="green";
    correctChoice++;
    scoreboard.innerHTML=correctChoice;
    question1_btn_true.disabled=true;
    question1_btn_false.disabled=true;
}
const modify_question1_false=function(){
    question1_answer.innerHTML="Incorrecto... El programa logra acceder a cada una de las variables ya que:<br>- 'blockVariable' se usa dentro del bloque if donde fue definida.<br>- 'functionVariable' se usa dentro de la función donde fue definida.<br>- 'globalVariable' puede ser accedida desde cualquier lugar del código."
    question1_answer.style.display="inline";
    question1_answer.style.textAlign="center";
    question1_answer.style.color="red";
    question1_btn_true.disabled=true;
    question1_btn_false.disabled=true;
}
question1_btn_true.addEventListener("click",modify_question1_true);
question1_btn_false.addEventListener("click",modify_question1_false);

//Pregunta2
const question2_btn_true=document.querySelector("#question2_btn_true");
const question2_btn_false=document.querySelector("#question2_btn_false");
const question2_answer=document.querySelector("#question2_answer");
const modify_question2_true=function(){
    question2_answer.innerHTML="Incorrecto... Recuerda que:<br>- Las variables globales (globalVariable) son las únicas que pueden ser accedidas desde cualquier lugar del código.<br>- Las variables locales (functionVariable), declaradas dentro de funciones, solamente pueden ser accedidas desde dentro de la función donde fueron declaradas.<br>- Las variables de bloque (blockVariable), declaradas dentro de un bloque de código {}, solamente pueden ser accedidas desde dentro del bloque donde se definieron.";
    question2_answer.style.display="inline";
    question2_answer.style.textAlign="center";
    question2_answer.style.color="red";
    question2_btn_true.disabled=true;
    question2_btn_false.disabled=true;
}
const modify_question2_false=function(){
    question2_answer.innerHTML="Correcto! La tienes clara, recuerda que:<br>- Las variables globales (globalVariable) son las únicas que pueden ser accedidas desde cualquier lugar del código.<br>- Las variables locales (functionVariable), declaradas dentro de funciones, solamente pueden ser accedidas desde dentro de la función donde fueron declaradas.<br>- Las variables de bloque (blockVariable), declaradas dentro de un bloque de código {}, solamente pueden ser accedidas desde dentro del bloque donde se definieron.";
    question2_answer.style.display="inline";
    question2_answer.style.textAlign="center";
    question2_answer.style.color="green";
    correctChoice++;
    scoreboard.innerHTML=correctChoice;
    question2_btn_true.disabled=true;
    question2_btn_false.disabled=true;
}
question2_btn_true.addEventListener("click",modify_question2_true);
question2_btn_false.addEventListener("click",modify_question2_false);
