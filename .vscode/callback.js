//llamamos a una funcion mediante callback
const getUserById = (id, callback) => {
	"use strict";

	const user = {
		nombre: "Fernando",
		id: id
	};

	if (id === 20) {
		callback(`El usuario con el id ${id}, no existe en la base de datos`);
	} else {
		callback(null, user);
	}


};

getUserById(5, (err, usuario) => {

	if (err) {
		return console.log(err);
	}

	console.log(`Usuario de base de datos,`, usuario);
});


//Problemas con los callbacks
//Al llamar recursivamente se hace ilegible.
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

const getEmpleado = (id, callbacks) => {
	const empleadoDB = empleados.find(empleado => empleado.id === id);

	if(!empleadoDB){
		callbacks(`No existe el empleado con el id ${id}`);
	}else{
		//el primer argumento es el error.
		callbacks(null, empleadoDB);
	}
}

const getSalario = (emple, callbackSalario) => {

	const salarioDB = salarios.find(salario => salario.id === emple.id);

	if(!salarioDB)
		callbackSalario(`No existe un salario para el empleado con el nombre ${emple.nombre}`);
	else{
		callbackSalario(null, {
			nombre: emple.nombre,
			salario: salarioDB.salario,
			id: emple.id
		});
	}
		
};

//Uso de la funcion callback.
//Invocamos la funcion GetEmpleado.
getEmpleado(5, (err, empl) => {
	if(err)
		return console.log(err);

	getSalario(empl, (err, resp) => {

		if(err)
			console.log(err);
		else
			console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
	});
});


