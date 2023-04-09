//! en esta aula, corto las clases y las muevo a sus respectivos archivos-módulos

const nombreCliente = "Gustavo";
const dniCliente = "27000000";
const numeroDeCuenta = "123456789";
const saldoCuenta = 1000;

//? importando módulos
/* Importing the `CuentaCorriente` class from the `CuentaCorriente.js` module. */
import {CuentaCorriente} from'./CuentaCorriente.js';
import {Cliente} from './Cliente.js';

/* Creating a new object of the class Cliente. */
const cliente1 = new Cliente();
const cuentaCorriente1 = new CuentaCorriente();

/* Assigning the value "Gustavo" to the property nombreCliente of the object cliente1. */
cliente1.nombreCliente = "Gustavo";
cliente1.dniCliente = "27000000";
cliente1.numeroFiscalCliente = "M27000000"

cuentaCorriente1.numero = "123456789";
//cuentaCorriente1.#saldo = 1000;
cuentaCorriente1.agencia = 152;

// console.log(cuentaCorriente1.saldo);
cuentaCorriente1.depositoEnCuenta(500);
// console.log(cuentaCorriente1.saldo);
// console.log(cuentaCorriente1);

//* creo la variable para ver el saldo, luego lo imprimo en pantalla.
let saldo = cuentaCorriente1.verSaldo();
console.log("El saldo de la cuenta es " + saldo);

//! puedo directamente asignar los movimientos a la variable y simplificar

/* Calling the `depositoEnCuenta()` method of the `CuentaCorriente` class with a parameter of 750,
which adds 750 to the private `#saldo` property of the `cuentaCorriente1` object and returns the
updated value. This updated value is then assigned to the `saldo` variable. */
saldo = cuentaCorriente1.depositoEnCuenta(750);
console.log("El saldo de la cuenta es " + saldo);
