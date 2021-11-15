//Creamos un array para luego llamarlos a travez de async-await.
const empleados = [{
	id: 1,
	nombre: "Martin"
},
{
	id: 2,
	nombre: "Eduardo"
},
{
	id: 3,
	nombre: "Dylan"

}];

const salarios = [{
	id: 1,
	salario: 1000
},
{
	id: 2,
	salario: 2000
}];

//Metodo para obtener un empleado.
const getEmpleado = async (id) => {

	const empleadoDB = empleados.find(empleado => empleado.id === id);

	if (!empleadoDB) {
		throw new Error(`No existe el empleado con el id ${id}`);
	} else {
		return empleadoDB;
	}
};

//Metodo para obtener el salario del empleado.
const getSalario = async (empleado) => {

	const salarioDB = salarios.find(salario => salario.id === empleado.id);

	if (!salarioDB)
		throw new Error(`No existe un salario para el empleado con el nombre ${empleado.nombre}`);
	else {
		return {
			nombre: empleado.nombre,
			salario: salarioDB.salario,
			id: empleado.id
		};
	}
};

const getInfo = async (id) => {

	const empleado = await getEmpleado(id);
	const salario = await getSalario(empleado);

	return `${empleado.nombre} tiene un salario de ${salario.salario}`
};

getInfo(3)
	.then(mensaje => console.log(mensaje))
.catch(err => console.log(err));	