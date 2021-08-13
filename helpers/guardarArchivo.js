const fs = require("fs");
const ruta = "./db/data.json";

//*Guardar la lista en un archivo. Con JSON.stringifi() puedo transformar la información en un JSON.
const guardarDB = (data) => {
  fs.writeFileSync(ruta, JSON.stringify(data));
};

//* Primeramente pregunto si existe el archivo, si existe usamos fs.readFileSync para leerlo. Este nos pide una ruta y un decodificador, de lo contrario enviara bites.
//* Con JSON.parse() transformamos un String en un archivo JSON.
const leerDB = () => {
    
  if (!fs.existsSync(ruta)) { //?   fs.existsSync() <--- Pregunta SI existe un archivo en una ruta.
    return null;
  }
  const infoSTR = fs.readFileSync(ruta, { encoding: "utf-8" });
  const data = JSON.parse(infoSTR)
  return data
};

module.exports = {
  guardarDB,
  leerDB,
};
