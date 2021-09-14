//Function expression
var canada = () => {
	console.log('Function Expression')
}

//Function declaration
function india() {
	console.log('Function Declaration');
}

//Invocation/Call/Excution
canada()
india()

//Function without array.
function withoutArray(person1, person2) {
	console.log('arguments', arguments)
	console.log(`${person1} is now married to ${person2}`)
}
withoutArray('Tim', 'Tina')

//The same function with array.
function withArray(...arguments) {
	console.log(Array.from(arguments))
	console.log(`${arguments[0]} is now married to ${arguments[1]}`)
}
withArray('Tim', 'Tina')
