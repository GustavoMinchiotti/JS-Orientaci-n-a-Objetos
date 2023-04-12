
//? creación del constructor 

export class Cliente {
    nombreCliente;
    dniCliente;
    rutCliente;

    /**
    * This is a constructor function that initializes the properties of a client object with their
    * name, ID number, and tax ID number.
    * @param nombreClienteParam - A string representing the name of the client.
    * @param dniClienteParam - The parameter "dniClienteParam" is likely referring to the DNI
    * (Documento Nacional de Identidad)
    * @param rutClienteParam - The parameter "rutClienteParam" is likely a string or number
    * representing the RUT (Rol Único Tributario) of a client. RUT is a unique identification number
    * used in Chile for tax and legal purposes.
    */
    constructor(nombreClienteParam, dniClienteParam, rutClienteParam) {
        this.nombreCliente = nombreClienteParam;
        this.dniCliente = dniClienteParam;
        this.rutCliente = rutClienteParam;
    }

}