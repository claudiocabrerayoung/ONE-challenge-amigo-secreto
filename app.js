// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// 1️. Array para almacenar los nombres de los amigos
let amigos = [];

// 2. Función para agregar amigos
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = ""; // Limpiar el campo
}

// Función para actualizar la lista en la UI
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista anterior

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${amigo}`;
        lista.appendChild(li);
    });
}

// 3️. Función para sortear amigos (y luego limpiar la lista)
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debe agregar al menos un amigo antes de sortear.");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `🎉 Amigo secreto: <strong>${amigos[indice]}</strong>`;

    // 4️. Limpiar lista después del sorteo
    amigos = []; // Vaciar el array
    document.getElementById("listaAmigos").innerHTML = ""; // Limpiar la lista en el DOM
}
