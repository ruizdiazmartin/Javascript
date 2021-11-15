
//Creamos un array para luego llamarlos en nuestra promesa.
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
const getEmpleado = (id) => {

	const promesaEmpleado = new Promise((resolve, reject) => {

		const empleadoDB = empleados.find(empleado => empleado.id === id);

		if(!empleadoDB){
			reject(`No existe el empleado con el id ${id}`);
		}else{
			resolve(empleadoDB);
		}
	});
	return promesaEmpleado;
};

//Metodo para obtener el salario del empleado.
const getSalario =  async (empleado) => {

	const promesaSalario = await new Promise((resolve, reject) => {
	
		const salarioDB = salarios.find(salario => salario.id === empleado.id);

		if(!salarioDB)
			reject(`No existe un salario para el empleado con el nombre ${empleado.nombre}`);
		else{
			resolve({
				nombre: empleado.nombre,
				salario: salarioDB.salario,
				id: empleado.id
			});
		}
		return promesaSalario;			
	})
};

//Invoco la funcion que retorna una promesa del empleado y luego invoco otra promesa que retorna el salario del empleado.
getEmpleado(2)
	.then(getSalario)
	.then(console.log)
.catch(err => {
	console.log(err);
});

