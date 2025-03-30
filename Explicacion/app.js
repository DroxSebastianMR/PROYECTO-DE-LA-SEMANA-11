// Seleccionar un elemento del hmtl
/* const title = document.getElementById('title-id');
console.log(title); */

// Seleccionar el hijo de un elemento padre
/* const lista = document.getElementById('list-id');
let hijos = lista.children; */

// Mostrar y modificar el contenido de los elementos
/* console.log(hijos); */

/* hijos[0].textContent = '<i>Elemento 1 modificado</i>';
hijos[1].innerHTML = '<i>Elemento 2 modificado</i>'; */

// Seleccionar al padre del elemento hijo
/* const hijoLista = document.getElementById('item-list-test');
console.log(hijoLista.parentNode) */

// Seleccionar el siguiente hermano del elemento hijo
/* const div = document.getElementById('div1');
const siguienteDiv = div.nextElementSibling;
console.log(siguienteDiv); */

/* CREACION DE ELEMENTOS */
/* const contendor = document.getElementById('contenedor_parrafos'); */
const nuevoElemento = document.createElement('p');
nuevoElemento.textContent = 'Soy un nuevo elemento creado desde JS';
document.getElementById("contenedor_parrafos").appendChild(nuevoElemento);


/* Eliminar a un hijo */

const lista = document.getElementById('list-id');
const hijoPrimero = lista.firstElementChild;

lista.removeChild(hijoPrimero);

/* Insertar un elemento antes del otro */

const nuevoItem = document.createElement('li');
nuevoItem.textContent = 'Elemento 1.5';
lista.insertBefore(nuevoItem, lista.children[1]);

/* Manipulacion de atributos */
const imagen = document.getElementById('img-test');
imagen.setAttribute('src', 'https://miro.medium.com/v2/resize:fit:1400/1*a3BHGbuAMpOaZj6HkTrNqA.png');

/* Manipulacion de clases */

/* Agregar */
imagen.classList.add("border-full", "shadow-sm");

/* Remover */
imagen.classList.remove("img-test-class");

/* Alternar */
imagen.classList.toggle("img-test-class"); // Si existe la clase la elimina, si no existe la agrega

/* Comprobar si existe la clase */
console.log(imagen.classList.contains("img-test-class")); // Devuelve true o false

/* Cambiar el nombre de la clase */
imagen.classList.replace("img-test-class", "img-test-class-2"); // Reemplaza una clase por otra

/* La cantidad de clases de un elemento */
console.log(imagen.classList.length); // Devuelve la cantidad de clases que tiene el elemento


/* EVENTOS */
const btnTest = document.getElementById('btn-test');

function mostrarAlerta(){
    alert('Hola, soy una alerta');
}

btnTest.addEventListener("click", function(){
    alert('Hola, soy una alerta desde el evento click');
});

document.getElementById('count-mouse').style.fontSize = '30px';

imagen.addEventListener("mouseover", function(){
    const count_mouse = document.getElementById('count-mouse').textContent;
    const count_mouse_int = parseInt(count_mouse);
    document.getElementById('count-mouse').textContent = count_mouse_int + 1;
});

/* Almacenamiento Local (LocalStorage) */
// Guarda informacion localmente en el navegador

/* localStorage.setItem("nombre", "Juan");
console.log( localStorage.getItem("nombre") ); // Devuelve "Juan");

localStorage.removeItem("nombre"); */ // Elimina el elemento del localStorage

/* JSON y almacenamiento */

const usuario = {
    nombre: "Juan",
    edad: 30,
    pais: "Argentina"
}

localStorage.setItem('usuario',JSON.stringify(usuario)); // Convierte el objeto a string y lo guarda en el localStorage

const usuarioGuardado = JSON.parse(localStorage.getItem("usuario")); // Obtemos el objeto guardado en el localStorage