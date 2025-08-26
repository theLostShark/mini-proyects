//Captura de elementos en JavaScript
const inputTarea = document.getElementById("inputTarea");
const listaTareas = document.getElementById("listaTareas");
const botonAdd = document.getElementById("botonAdd");


// Manejar el evento de agregar tarea
botonAdd.addEventListener("click", agregarTarea);


//funcion de agregar tareas
function agregarTarea() {
    if (inputTarea.value !== "") {
        const tarea = inputTarea.value;
        const li = document.createElement("li");
        li.textContent = tarea;

        //boton completar tarea
        let botonCompletar = document.createElement("button");
        botonCompletar.textContent = "✔️";
        botonCompletar.classList.add("btn-completar");
        botonCompletar.addEventListener("click", function () {
            li.classList.toggle("completada");
            guardarDatos();
        });


        // Botón de eliminar
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "❌";
        botonEliminar.classList.add("btn-eliminar");
        botonEliminar.addEventListener("click", function () {
            li.remove();
            guardarDatos();
        });

        li.appendChild(botonCompletar);
        li.appendChild(botonEliminar);

        listaTareas.appendChild(li);

        inputTarea.value = "";
        guardarDatos();
    } else {
        alert("tienes que escribir una nueva tarea")
    }
}


//Guardar en almacenamiento local (localStorage)
function guardarDatos() {
    localStorage.setItem('data', listaTareas.innerHTML);
}

function mostrarTareas() {
    listaTareas.innerHTML = localStorage.getItem('data');
}

mostrarTareas();