const nombreCliente = "Gustavo";
const dniCliente = "27000000";
const numeroDeCuenta = "123456789";
const saldoCuenta = 1000;

console.log(nombreCliente);

/* It creates a class called Cliente. */
class Cliente {
    nombreCliente;
    dniCliente;
    numeroDeCuenta;
    saldoCuenta;
}

/* Creating a new object of the class Cliente. */
const cliente1 = new Cliente ();

/* Assigning the value "Gustavo" to the property nombreCliente of the object cliente1. */
cliente1.nombreCliente = "Gustavo";
cliente1.dniCliente = "27000000";
cliente1.numeroDeCuenta = "123456789";
cliente1.saldoCuenta = 1000;

console.log(cliente1);