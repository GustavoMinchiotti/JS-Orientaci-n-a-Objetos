export class CuentaCorriente {
    cliente;
    numero;
    #saldo; // atributo privado
    agencia;

    /**
     * The constructor function is a special function that is called when an object is created from a
     * class.
     */
    constructor() {
        this.cliente = null;    //? clase 03-03 es null para que lo RELACIONE con uno nuevo pero no lo cree acá
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

    // Nuevo método -- 1er param es valor "lo que voy a transferir" 
    // 2do param es la "cuentaDestino"
    transferirParaCuenta(valor,cuentaDestino) {
        this.retirarDeCuenta(valor);    // this porque retiro de acá
        cuentaDestino.depositoEnCuenta(valor);  // el param se reemplaza cuando le digo a donde transfiero.

    }
}