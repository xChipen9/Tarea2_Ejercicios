class tarea {
    constructor(nombre) {
        this.nombre = nombre;
        this.completada = false;
    }

    completar() {
        this.completada = true;
    }
}

let tareas = [];

function agregarTarea(nombre) {
    let nuevaTarea = new Tarea(nombre);
    tareas.push(nuevaTarea);
}

function mostrarTareasPendientes() {
    console.log("Tareas Pendientes:");
    tareas.forEach(tarea => {
        if (!tarea.completada) {
            console.log(`- ${tarea.nombre}`);
        }
    });
}

function mostrarTareasCompletadas() {
    console.log("Tareas Completadas:");
    tareas.forEach(tarea => {
        if (tarea.completada) {
            console.log(`- ${tarea.nombre}`);
        }
    });
}

agregarTarea("Hacer la compra");
agregarTarea("Ir al gimnasio");
agregarTarea("Jugar al warzone");

tareas[0].completar();

mostrarTareasPendientes();
mostrarTareasCompletadas();