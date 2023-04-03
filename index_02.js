//! cambios en el archivo n°1 = separación de cliente y cuenta mas método para depósitos

const nombreCliente = "Gustavo";
const dniCliente = "27000000";
const numeroDeCuenta = "123456789";
const saldoCuenta = 1000;

console.log(nombreCliente);

/* It creates a class called Cliente. */
class Cliente {
    nombreCliente;
    dniCliente;
    numeroFiscalCliente;
}

class CuentaCorriente {
    numero;
    saldo;
    agencia;


    /**
     * The constructor function is a special function that is called when an object is created from a
     * class.
     */
    constructor() {
        this.numero = '';
        this.saldo = 0;
        this.agencia = '';
    }

    depositoEnCuenta(valor) {
        this.saldo += valor;
    }
    retirarDeCuenta(valor) {
        this.saldo -= valor;
    }
}

/* Creating a new object of the class Cliente. */
const cliente1 = new Cliente();
const cuentaCorriente1 = new CuentaCorriente();

/* Assigning the value "Gustavo" to the property nombreCliente of the object cliente1. */
cliente1.nombreCliente = "Gustavo";
cliente1.dniCliente = "27000000";
cliente1.numeroFiscalCliente = "M27000000"

//cuentaCorriente1.numero = "123456789";
//cuentaCorriente1.saldo = 1000;
//cuentaCorriente1.agencia = 152;

console.log(cuentaCorriente1.saldo);
cuentaCorriente1.depositoEnCuenta(500);
console.log(cuentaCorriente1.saldo);
console.log(cuentaCorriente1);