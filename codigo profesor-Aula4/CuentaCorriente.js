import { Cliente } from "./Cliente.js";

export class CuentaCorriente {
    #cliente; // convierte en privado
    numero;
    agencia;
    #saldo;
    static cantidadDeCuentas = 0; //! este atributo es común a todas las cuentas
    /**
     * This is a setter function in JavaScript that sets the value of a private property "cliente" to an
     * instance of the "Cliente" class.
     * @param valor - valor is a parameter representing the value that is being set for the "cliente"
     * property. It is expected to be an instance of the "Cliente" class.
     */
    set setCliente(valor) {
        if (valor instanceof Cliente)
            this.#cliente = valor;
    }

    // This is a code snippet in JavaScript that defines a method named getCliente, and it appears to be part of a class. The method uses the return keyword to return a private instance variable named #cliente, which is denoted by the use of the # symbol before the variable name. This means that the variable is only accessible from within the class, as it is marked as private. The purpose of the method appears to be to allow external code to retrieve the value of the #cliente variable from instances of the class without directly accessing the variable itself.

    get getCliente() {
        return this.#cliente;
    }


    constructor(clienteParam, numeroParam, agenciaParam) {
        this.setCliente = clienteParam;
        this.numero = numeroParam;
        this.agencia = agenciaParam;
        this.#saldo = 0;
        CuentaCorriente.cantidadDeCuentas++; //? al llamar a la clase le digo que afecte a todas y no solo a esta instancia como con this
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor) {
        if (valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo() {
        return this.#saldo;
    }

    transferirParaCuenta(valor, cuentaDestino) {
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
        valor = 200;
        valor = valor * 1000;
    }
}