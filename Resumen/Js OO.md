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









