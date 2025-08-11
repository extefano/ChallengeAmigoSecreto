// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; // Array para almacenar los nombres de los amigos

function agregarAmigo() { // Esta función se ejecuta al hacer clic en el botón "Agregar Amigo"
    const input = document.getElementById("amigo");// Obtenemos el elemento de entrada del DOM
    const nombre = input.value.trim();
    if (nombre) {// Verificamos que el nombre no esté vacío
        amigos.push (nombre);
        mostrarLista();
        input.value = ''; // Limpiamos el campo de entrada
    }
}
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");// Obtenemos el elemento de la lista del DOM
    lista.innerHTML =''; // Limpiamos la lista antes de mostrar los amigos
    amigos.forEach(
        amigo => {
            const li = document.createElement ('li');// Creamos un nuevo elemento de lista
            li.textContent = amigo; // Asignamos el nombre del amigo al contenido del elemento
            lista.appendChild(li); // Añadimos el elemento de lista a la lista en el DOM
        }
    );
};
function sortearAmigo() {// Esta funcion elige un solo objeto aleatoriamente de la lista de amigos y devuelve en el dom
    const lista = document.getElementById("listaAmigos");
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    const amigoAleatorio = amigos[Math.floor(Math.random() * amigos.length)];
    lista.innerHTML = `<li>Amigo seleccionado: ${amigoAleatorio}</li>`;   
};
