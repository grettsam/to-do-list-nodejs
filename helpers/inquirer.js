const inquirer = require("inquirer");
require("colors");

const preguntas = [
	{
		type: "list",
		name: "opcion",
		message: "Que desea hacer?",
		choices: [
			{
				value: "1",
				name: `${"1.".green} Crear tarea`,
			},
			{
				value: "2",
				name: `${"2.".green} Listar tarea`,
			},
			{
				value: "3",
				name: `${"3.".green} Listar tarea completadas`,
			},
			{
				value: "4",
				name: `${"4.".green} Listar tarea pendientes`,
			},
			{
				value: "5",
				name: `${"5.".green} Completar tarea(s)`,
			},
			{
				value: "6",
				name: `${"6.".green} Borrar tarea`,
			},
			{
				value: "0",
				name: `${"0.".red} Salir`,
			},
		],
	},
];

const inquireMenu = async () => {
	console.clear();
	console.log("=====================".rainbow);
	console.log("Seleccione una opción");
	console.log("=====================\n".rainbow);

	const { opcion } = await inquirer.prompt(preguntas);
	return opcion;
};

const pausa = async () => {
	const confirmacion = [
		{
			type: "input",
			name: "confirmar",
			message: `Presione ${"Enter".green} para continuar`,
		},
	];
	await inquirer.prompt(confirmacion);
};
module.exports = { inquireMenu, pausa };
