//global variables
let correctChoice=0;
let totalChoices=0;

const scoreboard=document.querySelector("#correctChoices");
const $totalChoices=document.querySelector("#totalChoices");

//promise final message
const showMessage=(totalChoices,correctChoices)=>{
    return new Promise((resolve, reject) => {
      if(totalChoices===12){
        if (correctChoices<=5){
          resolve("Debes mejorar tus habilidades con el lenguaje para llegar al siguiente nivel. Ánimo!");
        }else if(correctChoices<=9){
          resolve("Tienes un buen manejo del lenguaje pero puedes pulir muchas habilidades. Sigue así!");
        }else if(correctChoices<=11){
          resolve("Tienes un dominio casi perfecto de los conceptos más dificiles de este lenguaje de programación. Te felicito!");  
        }else if(correctChoices<13){
          resolve("Has completado el test de manera perfecta, estás listo para dar el siguiente paso en este proceso. Eres un ejemplo a seguir!");
        }
      }
  });
  }
//Seccion 1

//Ejercicio 1

//Pregunta1
const question1_btn_true=document.querySelector("#question1_btn_true");
const question1_btn_false=document.querySelector("#question1_btn_false");
const question1_answer=document.querySelector("#question1_answer");
const modify_question1_true=function(){
    question1_answer.innerHTML="Correcto!<br>El programa logra ejecutar cada una de las variables ya que:<br>- 'blockVariable' se usa dentro del bloque if donde fue definida.<br>- 'functionVariable' se usa dentro de la función donde fue definida.<br>- 'globalVariable' puede ser accedida desde cualquier lugar del código."
    question1_answer.style.display="block";
    question1_answer.style.textAlign="center";
    question1_answer.style.color="green";
    totalChoices++;
    correctChoice++;
    scoreboard.innerHTML=correctChoice;
    $totalChoices.innerHTML=totalChoices;
    question1_btn_true.style.display="none";
    question1_btn_false.style.display="none";
}
const modify_question1_false=function(){
    question1_answer.innerHTML="Incorrecto...<br>El programa logra ejecutar cada una de las variables ya que:<br>- 'blockVariable' se usa dentro del bloque if donde fue definida.<br>- 'functionVariable' se usa dentro de la función donde fue definida.<br>- 'globalVariable' puede ser accedida desde cualquier lugar del código."
    question1_answer.style.display="block";
    question1_answer.style.textAlign="center";
    question1_answer.style.color="red";
    totalChoices++;
    $totalChoices.innerHTML=totalChoices;
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
    question2_answer.innerHTML="Incorrecto...<br>Recuerda que:<br>- Las variables globales (globalVariable) son las únicas que pueden ser accedidas desde cualquier lugar del código.<br>- Las variables locales (functionVariable), declaradas dentro de funciones, solamente pueden ser accedidas desde dentro de la función donde fueron declaradas.<br>- Las variables de bloque (blockVariable), declaradas dentro de un bloque de código {}, solamente pueden ser accedidas desde dentro del bloque donde se definieron.";
    question2_answer.style.display="block";
    question2_answer.style.textAlign="center";
    question2_answer.style.color="red";
    totalChoices++;
    $totalChoices.innerHTML=totalChoices;
    question2_btn_true.style.display="none";
    question2_btn_false.style.display="none";
}
const modify_question2_false=function(){
    question2_answer.innerHTML="Correcto!<br>Recuerda que:<br>- Las variables globales (globalVariable) son las únicas que pueden ser accedidas desde cualquier lugar del código.<br>- Las variables locales (functionVariable), declaradas dentro de funciones, solamente pueden ser accedidas desde dentro de la función donde fueron declaradas.<br>- Las variables de bloque (blockVariable), declaradas dentro de un bloque de código {}, solamente pueden ser accedidas desde dentro del bloque donde se definieron.";
    question2_answer.style.display="block";
    question2_answer.style.textAlign="center";
    question2_answer.style.color="green";
    totalChoices++;
    $totalChoices.innerHTML=totalChoices;
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
    totalChoices++;
    $totalChoices.innerHTML=totalChoices;
    question3_btn_true.style.display="none";
    question3_btn_false.style.display="none";
}
const modify_question3_false=function(){
    question3_answer.innerHTML="Correcto!<br>Debido al hoisting, las variables declaradas con la palabra reservada 'var' y llamadas antes de su declaración son retornadas como 'undefined'. El resultado es 'Valor de a:undefined'.";
    question3_answer.style.display="block";
    question3_answer.style.textAlign="center";
    question3_answer.style.color="green";
    totalChoices++;
    $totalChoices.innerHTML=totalChoices;
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
    totalChoices++;
    $totalChoices.innerHTML=totalChoices;
    question4_btn_true.style.display="none";
    question4_btn_false.style.display="none";
}
const modify_question4_false=function(){
    question4_answer.innerHTML="Correcto!<br>Debido al hoisting, las variables declaradas con la palabra reservada 'let' también se 'elevan' pero no son inicializadas sino que se mantienen en la temporal dead zone hasta su declaración. Al accederla antes de su declaración el resultado es un error provocado por la temporal dead zone.";
    question4_answer.style.display="block";
    question4_answer.style.textAlign="center";
    question4_answer.style.color="green";
    totalChoices++;
    $totalChoices.innerHTML=totalChoices;
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
    totalChoices++;
    $totalChoices.innerHTML=totalChoices;
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
    totalChoices++;
    $totalChoices.innerHTML=totalChoices;
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
    totalChoices++;
    $totalChoices.innerHTML=totalChoices;
    question6_btn_true.style.display="none";
    question6_btn_false.style.display="none";
}
const modify_question6_false=function(){
    question6_answer.innerHTML="Correcto!<br>Las funciones declaradas son aquellas que inician con la palabra reservada 'function' seguido del nombre que se le dará. Estás funciones son 'elevadas' por el hoisting y pueden ser ejecutadas antes de su declaración. En este caso el console.log retornará 'Resultado de funcionDeclarada:Función declarada ha sido llamada.'";
    question6_answer.style.display="block";
    question6_answer.style.textAlign="center";
    question6_answer.style.color="green";
    totalChoices++;
    $totalChoices.innerHTML=totalChoices;
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
    totalChoices++;
    $totalChoices.innerHTML=totalChoices;
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
    totalChoices++;
    $totalChoices.innerHTML=totalChoices;
    question7_btn_true.style.display="none";
    question7_btn_false.style.display="none";
}
question7_btn_true.addEventListener("click",modify_question7_true);
question7_btn_false.addEventListener("click",modify_question7_false);

//Seccion 2

//Ejercicio 3

//Pregunta 8
const question8_btn_1=document.querySelector("#question8_btn_1");
const question8_btn_2=document.querySelector("#question8_btn_2");
const question8_answer=document.querySelector("#question8_answer");
const modify_question8_1=function(){
    question8_answer.innerHTML="Incorrecto...<br>Aunque el closure permite a la función sumadorChild acceder siempre a la variable num de la función padre, al instanciar dos ejecuciones diferentes del mismo padre se crean dos contextos de ejecución distintos, lo que hace que en cada contexto la variable num funcione de forma independiente.";
    question8_answer.style.display="block";
    question8_answer.style.textAlign="center";
    question8_answer.style.color="red";
    totalChoices++;
    $totalChoices.innerHTML=totalChoices;
    question8_btn_1.style.display="none";
    question8_btn_2.style.display="none";
}
const modify_question8_2=function(){
    question8_answer.innerHTML="Correcto!<br>Aunque el closure permite a la función sumadorChild acceder siempre a la variable num de la función padre, al instanciar dos ejecuciones diferentes del mismo padre se crean dos contextos de ejecución distintos, lo que hace que en cada contexto la variable num funcione de forma independiente.";
    question8_answer.style.display="block";
    question8_answer.style.textAlign="center";
    question8_answer.style.color="green";
    totalChoices++;
    $totalChoices.innerHTML=totalChoices;
    correctChoice++;
    scoreboard.innerHTML=correctChoice;
    question8_btn_1.style.display="none";
    question8_btn_2.style.display="none";
}
question8_btn_1.addEventListener("click",modify_question8_1);
question8_btn_2.addEventListener("click",modify_question8_2);

//Ejercicio 4

//Pregunta 9
const question9_btn_1=document.querySelector("#question9_btn_1");
const question9_btn_2=document.querySelector("#question9_btn_2");
const question9_answer=document.querySelector("#question9_answer");
const modify_question9_1=function(){
    question9_answer.innerHTML="Correcto!<br>Observa como en el operador terciario se define que la promesa retorne su valor resolve, se cumpla y ejecute el callback cuando la constante 'flag' sea falsy (!flag)."
    question9_answer.style.display="block";
    question9_answer.style.textAlign="center";
    question9_answer.style.color="green";
    totalChoices++;
    $totalChoices.innerHTML=totalChoices;
    correctChoice++;
    scoreboard.innerHTML=correctChoice;
    question9_btn_1.style.display="none";
    question9_btn_2.style.display="none";
}
const modify_question9_2=function(){
    question9_answer.innerHTML="Incorrecto...<br>Observa como en el operador terciario se define que la promesa retorne su valor resolve, se cumpla y ejecute el callback cuando la constante 'flag' sea falsy (!flag)."
    question9_answer.style.display="block";
    question9_answer.style.textAlign="center";
    question9_answer.style.color="red";
    totalChoices++;
    $totalChoices.innerHTML=totalChoices;
    question9_btn_1.style.display="none";
    question9_btn_2.style.display="none";
}
question9_btn_1.addEventListener("click",modify_question9_1);
question9_btn_2.addEventListener("click",modify_question9_2);

//Ejercicio 5


//Pregunta 10
const question10_btn_1=document.querySelector("#question10_btn_1");
const question10_btn_2=document.querySelector("#question10_btn_2");
const question10_answer=document.querySelector("#question10_answer");
const modify_question10_1=function(){
    question10_answer.innerHTML="Correcto!<br>Recuerda que:<br>- Todo el código síncrono se ejecuta inmediatamente, por eso las funciones console.log() fuera de los setTimeout son mostradas primero.<br>- El código asíncrono se divide en micro y macro tareas. Las funciones setTimeout son consideradas macrotareas, por eso se envían a la cola de tareas y son ejecutadas por orden de entrada una vez finaliza la ejecución de todo el código síncrono."
    question10_answer.style.display="block";
    question10_answer.style.textAlign="center";
    question10_answer.style.color="green";
    totalChoices++;
    $totalChoices.innerHTML=totalChoices;
    correctChoice++;
    scoreboard.innerHTML=correctChoice;
    question10_btn_1.style.display="none";
    question10_btn_2.style.display="none";
}
const modify_question10_2=function(){
    question10_answer.innerHTML="Incorrecto...<br>Recuerda que:<br>- Todo el código síncrono se ejecuta inmediatamente, por eso las funciones console.log() fuera de los setTimeout son mostradas primero.<br>- El código asíncrono se divide en micro y macro tareas. Las funciones setTimeout son consideradas macrotareas, por eso se envían a la cola de tareas y son ejecutadas por orden de entrada una vez finaliza la ejecución de todo el código síncrono."
    question10_answer.style.display="block";
    question10_answer.style.textAlign="center";
    question10_answer.style.color="red";
    totalChoices++;
    $totalChoices.innerHTML=totalChoices;
    question10_btn_1.style.display="none";
    question10_btn_2.style.display="none";
}
question10_btn_1.addEventListener("click",modify_question10_1);
question10_btn_2.addEventListener("click",modify_question10_2);

//Pregunta 11
const question11_btn_1=document.querySelector("#question11_btn_1");
const question11_btn_2=document.querySelector("#question11_btn_2");
const question11_answer=document.querySelector("#question11_answer");
const modify_question11_1=function(){
    question11_answer.innerHTML="Incorrecto...<br>Recuerda que:<br>- Todo el código síncrono se ejecuta en primer lugar, las funciones console.log() son las primeras en ser ejecutadas.<br>- Las macrotareas como los setTimeout entran en la cola de macrotareas para esperar a ser ejecutadas en orden de entrada.<br>- Las promesas son consideradas microtareas, las microtareas entran en una cola aparte de microtareas. Está cola de microtareas se ejecuta tambien en orden de entrada pero antes de la cola de macrotareas.";
    question11_answer.style.display="block";
    question11_answer.style.textAlign="center";
    question11_answer.style.color="red";
    totalChoices++;
    $totalChoices.innerHTML=totalChoices;
    question11_btn_1.style.display="none";
    question11_btn_2.style.display="none";
}
const modify_question11_2=function(){
    question11_answer.innerHTML="Correcto!<br>Recuerda que:<br>- Todo el código síncrono se ejecuta en primer lugar, las funciones console.log() son las primeras en ser ejecutadas.<br>- Las macrotareas como los setTimeout entran en la cola de macrotareas para esperar a ser ejecutadas en orden de entrada.<br>- Las promesas son consideradas microtareas, las microtareas entran en una cola aparte de microtareas. Está cola de microtareas se ejecuta tambien en orden de entrada pero antes de la cola de macrotareas.";
    question11_answer.style.display="block";
    question11_answer.style.textAlign="center";
    question11_answer.style.color="green";
    totalChoices++;
    $totalChoices.innerHTML=totalChoices;
    correctChoice++;
    scoreboard.innerHTML=correctChoice;
    question11_btn_1.style.display="none";
    question11_btn_2.style.display="none";
}
question11_btn_1.addEventListener("click",modify_question11_1);
question11_btn_2.addEventListener("click",modify_question11_2);

//Pregunta 12
const question12_btn_1=document.querySelector("#question12_btn_1");
const question12_btn_2=document.querySelector("#question12_btn_2");
const question12_answer=document.querySelector("#question12_answer");
const modify_question12_1=function(){
    question12_answer.innerHTML="Incorrecto...<br> Debes mejorar tu comprensión del Event Loop para dominar mejor el lenguaje.";
    question12_answer.style.display="block";
    question12_answer.style.textAlign="center";
    question12_answer.style.color="red";
    totalChoices++;
    $totalChoices.innerHTML=totalChoices;
    question12_btn_1.style.display="none";
    question12_btn_2.style.display="none";
}
const modify_question12_2=function(){
    question12_answer.innerHTML="Correcto!<br>Tienes una comprensión muy buena del Event Loop, felicitaciones!";
    question12_answer.style.display="block";
    question12_answer.style.textAlign="center";
    question12_answer.style.color="green";
    totalChoices++;
    $totalChoices.innerHTML=totalChoices;
    correctChoice++;
    scoreboard.innerHTML=correctChoice;
    question12_btn_1.style.display="none";
    question12_btn_2.style.display="none";
}
question12_btn_1.addEventListener("click",modify_question12_1);
question12_btn_2.addEventListener("click",modify_question12_2);

//Seccion 3

//Ejercicio 6

//Pregunta 13

const question13_fetch_btn=document.querySelector("#fetch_btn");
const question13_fetch_response=document.querySelector("#fetch_response");
const question13_explain=document.querySelector("#question13_explain");

const interactApi=()=>{
    let id=document.getElementById("id_input").value;
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        let {name,email,address}=json[id]
        question13_fetch_response.innerHTML=`${name} vive en ${address.city} y su email es ${email}`;
      })
      .catch(()=>question13_fetch_response.innerHTML=`No se encontraron usuarios con ese ID`)
      .finally(()=>{
        question13_explain.style.display="block";
        //final message
        showMessage(totalChoices,correctChoice)
            .then(message=>alert(message))
            .finally(()=>alert("Muchas gracias por realizar este test, espero haberte ayudado en tu proceso de aprendizaje.\nMuchos éxitos en tu camino al éxito!"));
        })
}

question13_fetch_btn.addEventListener("click",interactApi);