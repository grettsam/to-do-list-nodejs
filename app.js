require("colors");
const { inquireMenu, pausa } = require("./helpers/inquirer");

const main = async () => {
	let opt = "";

	do {
		opt = await inquireMenu();
		await pausa();
	} while (opt !== "0");
};
main();
