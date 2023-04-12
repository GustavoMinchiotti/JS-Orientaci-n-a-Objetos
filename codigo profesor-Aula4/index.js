/*Importación de clases*/
import { Cliente } from './Cliente.js'
import { CuentaCorriente } from './CuentaCorriente.js';



const cliente = new Cliente('Leonardo', '13804050', '123224');
const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');


const cliente2 = new Cliente('Maria', '16979808', '8989');
const cuentaDeMaria = new CuentaCorriente(cliente2, '2', '002');


console.log(cuentaDeLeonardo.getCliente); //* imprime el cliente construido en clase Constructores 
console.log(cuentaDeMaria.getCliente);      //* https://app.aluracursos.com/course/javascript-introduccion-orientacion-objetos/task/74154


console.log('Hay: ', CuentaCorriente.cantidadDeCuentas, ' Cuentas corrientes');