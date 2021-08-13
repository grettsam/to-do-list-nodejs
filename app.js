require("colors");
const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const { inquireMenu, pausa, leerInput } = require("./helpers/inquirer");
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
        console.log(tareas.listadoArr);
        break;
    }
    guardarDB(tareas.listadoArr);

    await pausa();
  } while (opt !== "0");
};
main();
