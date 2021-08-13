const Tarea = require("./tarea");

class Tareas {
  _listado = {};

  get listadoArr() {
    // *EL Object.keys() devuelve las llaves "primarias" de un arreglo o objetos, en este caso se pide las llaves primarias del objeto "_listado".
    // *El uso del forEach() es para enviar la clave obtenida por el Object.keys() y recorrer el arreglo para llenarlo con las tareas.

    const lista = [];
    Object.keys(this._listado).forEach((key) => {
      lista.push(this._listado[key]);
    });

    return lista;
  }

  constructor() {
    this._listado = {};
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
}

module.exports = Tareas;
