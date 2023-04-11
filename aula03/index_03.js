//! en esta aula, corto las clases y las muevo a sus respectivos archivos-módulos

//? importando módulos
/* Importing the `CuentaCorriente` class from the `CuentaCorriente.js` module. */
import { CuentaCorriente } from './CuentaCorriente.js';
import { Cliente } from './Cliente.js';

/* Creating a new object of the class Cliente. */
const cliente1 = new Cliente(); //* esta referenciado dentro del constructor de C.Cte. 
const cuentaCorriente1 = new CuentaCorriente();

/* en cliente1 cargo valores al objeto Cliente */
cliente1.nombreCliente = "Gustavo";
cliente1.dniCliente = "27000000";
cliente1.numeroFiscalCliente = "M27000000"

cuentaCorriente1.numero = "123456789";
//cuentaCorriente1.#saldo = 1000;
cuentaCorriente1.agencia = 152;
cuentaCorriente1.cliente = cliente1; //* le digo cargá cliente1 en el módulo Cliente

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
console.log(cuentaCorriente1);


/*
? creación de nuevo cliente y cuenta corriente para transferir paso a paso
? 1 creo la const y la nueva instancia
? 3 creo al nuevo cliente (variable y su instancia)     --- sino lo creo acá da error ---
? 2 asigno los valores a la cuenta
? 4 asigno valores al cliente
*/

const cuentaCte_2 = new CuentaCorriente();
const cliente2 = new Cliente();

cuentaCte_2.numero = "00000002";
cuentaCte_2.agencia = 203;
cuentaCte_2.cliente = cliente2;

cliente2.nombreCliente = "Aye";
cliente2.dniCliente = "30600000";
cliente2.numeroFiscalCliente = "M30600000"

// muestro saldo antes y después de la transferencia.
let saldoDeAye = cuentaCte_2.verSaldo();
console.log("El saldo de la cuenta antes de transferir es: " + saldoDeAye);

cuentaCorriente1.transferirParaCuenta(300,cuentaCte_2);

let saldoNuevoAye = cuentaCte_2.verSaldo(); // La nueva instancia tiene el valor actualizado del saldo porque Ya cambió.

console.log("El saldo DESPUÉS de transferir es: " + saldoNuevoAye);


