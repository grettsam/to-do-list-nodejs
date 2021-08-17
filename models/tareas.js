const Tarea = require("./tarea");

class Tareas {
  _listado = {};

  constructor() {
    this._listado = {};
  }

  get listadoArr() {
    const lista = [];
    Object.keys(this._listado).forEach((key) => {
      lista.push(this._listado[key]);
    });

    return lista;
  }

  cargarTareasFromArr(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  listadoCompleto() {
    console.log();
    this.listadoArr.forEach((item, i) => {
      const idx = `${i + 1}`.green;
      item.completado
        ? console.log(`${idx} ${item.desc} :: ${"Compleado".green}`)
        : console.log(`${idx} ${item.desc} :: ${"Pendiente".red}`);
    });
    console.log();
  }

  listarPendientesCompletadas(completadas = true) {
    console.log();
    let contador = 0;

    this.listadoArr.forEach((tarea) => {
      const { desc, completado } = tarea;
      const estado = completado ? "Completada".green : "Pendiente".red;
      if (completadas) {
        // mostrar completadas
        if (completado) {
          contador += 1;
          console.log(`${(contador + ".").green} ${desc} :: ${estado}`);
        }
      } else {
        // mostrar pendientes
        if (!completado) {
          contador += 1;
          console.log(`${(contador + ".").green} ${desc} :: ${estado}`);
        }
      }
    });
  }
  borrarTarea(id = "") {
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }
  toggleCompletadas(ids = []) {
    ids.forEach((id) => {
      const tarea = this._listado[id];
      if (!tarea.completado) {
        tarea.completado = new Date().toISOString();
      }
    });

    this.listadoArr.forEach((tarea) => {
      if (!ids.includes(tarea.id)) {
        this._listado[tarea.id].completado = null;
      }
    });
  }
}

module.exports = Tareas;
