require("colors");
const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const {
  inquireMenu,
  pausa,
  leerInput,
  listadoTareaBorrar,
} = require("./helpers/inquirer");
const Tareas = require("./models/tareas");

const main = async () => {
  let opt = "";
  const tareas = new Tareas();
  const tareasBD = leerDB();

  if (tareasBD) {
    tareas.cargarTareasFromArr(tareasBD);
  }

  do {
    opt = await inquireMenu();

    switch (opt) {
      case "1":
        // * Crear tareas
        const desc = await leerInput("Descripción:");
        tareas.crearTarea(desc);
        break;
      case "2":
        // * Listar Tareas
        tareas.listadoCompleto();
        break;
      case "3":
        // * Listar Completadas
        tareas.listarPendientesCompletadas(true);
        break;
      case "4":
        // * Listar Pendientes
        tareas.listarPendientesCompletadas(false);
        break;
      case "5":
        // * Completar Tareas
        // tareas.pendiente();
        break;
      case "6":
        // * Borrar Tareas
         const id = await listadoTareaBorrar(tareas.listadoArr)
         console.log({id});
        break;
    }
    guardarDB(tareas.listadoArr);

    await pausa();
  } while (opt !== "0");
};
main();
