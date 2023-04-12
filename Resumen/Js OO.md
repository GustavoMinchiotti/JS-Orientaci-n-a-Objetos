# JavaScript Orientación a objetos

## Clases

Inicia con una explicación de porque las variables no son la mejor opción para trabajar con muchos registros y como una 
clase puede ser un molde para agrupar esos registros o datos de clientes de un banco.

![img.png](img.png)

![img_1.png](img_1.png)

Creo la clase y debajo una instancia de la misma:

![img_2.png](img_2.png)

![img_3.png](img_3.png)

Accedo a la propiedad nombre del objeto cliente1 y la modifico.

Ahora puedo acceder al objeto o instancia completo.

![img_4.png](img_4.png)

Lo que aprendimos en esta aula:

* Creación de clases
* Qué son los atributos/propiedades de una clase
* Instancia/Objeto de una clase
* Palabras reservadas class y new

### Clase 02 

#### Métodos

Dentro de las clases puedo agregar comportamientos en el ejemplo se suman los depósitos al saldo.

![img_5.png](img_5.png)

Uso la palabra reservada `.this` refiere a que los cambios son al objeto que estoy referenciando el actual en este ejemplo
es la `cuentaCorriente1`.
Para utilizar el método lo llamo con la siguiente sintaxis:

![img_6.png](img_6.png)

Resultado: 

![img_7.png](img_7.png)

### Atributos privados #1

    /**
     * The constructor function is a special function that is called when an object is created from a
     * class.
     */
    constructor() {
        this.numero = '';
        this.saldo = 0;
        this.agencia = '';
    }

Para que los valores no inicializados No den errores como NAN los defino como vacíos en el constructor y eso pasa a ser su 
inicialización.

![img_8.png](img_8.png)

### Atributos privados #2 Encapsulamiento

Por convención todavía no es oficial anteponiendo él `#` a la variable convierto un atributo en privado y solo es visible 
y operable dentro de la función. NOTA si utilizo `_` le digo al programador que lo trate como privado, pero NODEJS 
lo ejecuta igual.

![img_9.png](img_9.png)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields

### Métodos con retorno

Palabra reservada `return`

![img_10.png](img_10.png)

Creo la function para retorno sin romper la encapsulation

![img_11.png](img_11.png)

Visualizo la información

![img_12.png](img_12.png)

Mejoro el código

![img_13.png](img_13.png)

![img_14.png](img_14.png)

## Modularizando el código

En esta clase seccionaremos al archivo en módulos, En la carpeta aula_03 iré creando los módulos y dentro de cada uno 
pongo las clases luego para acceder desde `index.js` los debo importar.

Esta es la sintaxis 

![img_15.png](img_15.png) 

 Para crear ese archivo package.json lo podemos crear de dos formas: lo podemos hacer a mano si conocemos la estructura 
 y todas las variables, o podemos hacer uso de una herramienta que nos permite utilizar Node que se llama `NPM`, 
 de **_Node Package Management_** y ejecutamos ese comando diciéndole que inicie nuestro proyecto.

Al igual que en las clases de OB inicio un paquete json con el comando `NPM init`

![img_16.png](img_16.png)

ahí comienzo a cargar los datos requeridos en la terminal: el nombre entre parentesis lo pone automatico por la carpeta
lo siguiente escrito en minusculas es el nombre que le dimos en esta clase.

![img_17.png](img_17.png)

![img_18.png](img_18.png)

Me pregunta si esta bien: la carpeta tenia un ascento que no lo lee -- COMPROBÉ QUE SI FUNCIONA --  me llevo al repositorio

![img_19.png](img_19.png)

Con todo esto todavía da error la importación, agrego `"type" : "module",` en este ejemplo lleva coma en otros no.

![img_20.png](img_20.png)

exporto la clase en el mod cuentaCorriente

![img_21.png](img_21.png)   -- 

![img_22.png](img_22.png) -- si no exportaba los dos no funcionaba.

![img_23.png](img_23.png)

FUNCIONA CORRECTAMENTE.

### Composición de clases

Componer clases es unirlas de manera que trabajen juntas varias clases.

En esta clase agregamos un objeto dentro de cuenta corriente, a cliente y en el constructor lo iniciamos como `null`
para referenciarlo pero crearlo en otro lado, el módulo propio de Cliente.

![img_24.png](img_24.png)

![img_25.png](img_25.png)

Lo muestra exitosamente

![img_26.png](img_26.png)

#### Método para transferir
Como dice la imagen, los parámetros son el `valor` de esta cuenta por eso el uso de `.this` y el segundo es la cuenta de 
destino que luego será asignada. dentro de este método/función uso los ya creados para _retirar y depositar_.

![img_27.png](img_27.png)

Luego de crear la nueva cuenta y cliente "ejemplo en código" hago la transferencia e imprimo el saldo inicial y posterior

![img_28.png](img_28.png)

##  Parámetros por valor y por referencia

Bien, en el caso de los **objetos** imaginemos que JavaScript toma esa caja y se la pasa a la función. 
Entonces la función tiene acceso a la caja entera. En el caso de los _valores primitivos_, por ejemplo `valor`, lo que 
hace acá es copiar el valor, decir qué tiene, pero no te pasa la caja. Entonces, este caso se llama parámetro con valor 
y en el caso de los objetos, los arrays o cosas variables más complejas, se llaman parámetros por referencia.

Por valor = copia del valor (string, numero, etc)
por referencia = copia el espacio de memoria (**Puede modificar la función!!**)


## Null y undefined
 
En el ejemplo de la clase explica que puedo crear un objeto y al asignarle `null` en el constructor la clase funciona 
igual, en cambio, si no lo hago me retorna `undefined` que es un error.

## SET y GET atributos privados

Siguiendo con el ejemplo de la clase al querer convertir a la clase Cliente en privada vemos que por ser un tipo de dato
no primitivo "un objeto en particular" debemos trabajar de otra manera.

Acá entran SET y Get

La sintaxis es bastante distinta a otros lenguajes.

Ver en Ob y el video que guarde en youtube : https://www.youtube.com/watch?v=TEzu31q9MVA


## constructor

Si bien en las clases anteriores los objetos se construían era de manera implícita por js. con varias líneas de código
con esta manera simplificamos el código.

![img_29.png](img_29.png)

Al ser parámetros la creación cambia:

De esto:
* ![img_30.png](img_30.png)

A esto: 
* ![img_31.png](img_31.png)

Ahora refactoriza el código del constructor cuenta corriente:

![img_32.png](img_32.png) a este archivo lo mejoro ==>

Como cliente es un objeto y atributo privado para construir la cuenta corriente llamo al setter

![img_33.png](img_33.png)

Para usarla en index debo usar parámetros

![img_34.png](img_34.png)  ![img_35.png](img_35.png)

Muy Importante, el profesor cambio get y set cliente por solo cliente en mi caso como no lo quise cambiar tuve que usar 
getCliente para obtener los datos.

## Atributos estáticos

Siempre se va a acceder a través de la clase y nunca desde `.this`

El atributo estático es común a todas las piezas (en este ejemplo todas las cuentas corrientes), toda vez que sea 
construida una instancia, ese atributo es estático, ese atributo va a estar compartido para todas.

Utilizamos la palabra reservada `static`

![img_37.png](img_37.png)

Al llamar a la clase le digo que afecte a todas y no solo a esta instancia como con this

![img_36.png](img_36.png)

![img_38.png](img_38.png)
.