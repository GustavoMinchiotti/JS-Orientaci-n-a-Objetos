//! cambios en el archivo n°1 = separación de cliente y cuenta mas método para depósitos

const nombreCliente = "Gustavo";
const dniCliente = "27000000";
const numeroDeCuenta = "123456789";
const saldoCuenta = 1000;

//console.log(nombreCliente);

/* It creates a class called Cliente. */
class Cliente {
    nombreCliente;
    dniCliente;
    numeroFiscalCliente;
}

class CuentaCorriente {
    numero;
    #saldo; // atributo privado
    agencia;


    /**
     * The constructor function is a special function that is called when an object is created from a
     * class.
     */
    constructor() {
        this.numero = '';
        this.#saldo = 0;
        this.agencia = '';
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo  // la func retorna el valor del atributo privado
    }
    retirarDeCuenta(valor) {
        if (valor <= this.#saldo) // aseguro que no pueda retirar mas de lo que tiene en su cuenta.
            this.#saldo -= valor;
        return this.#saldo
    }

    /**
     * The function returns the value of the private variable "saldo".
     * @returns The `verSaldo()` method is returning the value of the private `#saldo` property.
     */
    verSaldo() {
        return this.#saldo;
    }
}

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
