import PropTypes from 'prop-types'
import { useState } from 'react'; // La palabra especial use indica que es un hook, esto hay que tenerlo en cuenta para nuestros hooks personalizados los cuales deben seguir esa regla
// Los hooks son funciones especiales
const handleAdd = (e) => console.log(e) // La funcion la colocamos afuera del componente, ya que la funcion no depende ni usa nada del componente, es decir, no depende por ejemplo del value, o modifica algo de este, por lo que
// podemos definirla por fuera del componente para que cada que se vuelva a renderizar el componente react no tenga que asignar otro espacio de memoria a la misma funcion

export const CounterApp = ({value}) => { // extrae el prop value trasnferido desde el padre

    const [counter, setCounter] = useState(value) // al useState se le requiere mandar el valor inicial, en este caso toma el que el componente padre le mande
    // se suelen almacenar en constantes para que accidentalmente no les cambiemos el valor
    // lo que se guarda en la variable de array es una desestructuracion de el retorno de la funcion useState
    // la primer variable counter toma el valor del primer valor retornado desde useState, dicho valor representa el valor del estado del valor inicial que se le paso

    const handleCounter = () => { // funcion que declaramos internamente ya que trabaja con datos internos del componente y es necesario
        setCounter( counter + 1 ) // Cuando mandamos a llamar al setCounter lo que hace es decirle a react ' el estado cambio, por lo que tienes que volver a renderizar el componente, pero el estado se mantiene'
    }

    return (
        <>
            <h1> CounterApp </h1>
            <h2> { counter } </h2>
            <button onClick={handleAdd }> {/* Para manejar los eventos, react nos ofrece atributos clave que nos permiten reaccionar a las acciones que ocurren dentro de nuestro componente, por ejemplo en este caso definimos
                que cuando ocurra un evento de click, deberá reaccionar llamando a una funcion llamada handleAdd que realizará algun proceso que le hayamos puesto
                - En estos casos, le estamos pasando todos los detalles del evento a la funcion sin necesidad de una estructura como esta (e) => handleAdd(e), ya que en los casos puntuales que solo queremos pasarle los detalles
                del evento a la funcion, basta con llamar el nombre de la funcion, y react automaticamente lo que hará es que a esa funcion le pasara como parametro los detalles del evento, pero ya si quisieramos darle mas parametros
                nos toca ahi si con una funcion o definiendolos
                    - (e) => handleAdd(e) - Lo utilizariamos si hay mas propiedades que requerimos pasarle a la funcion
                    - handleAdd - Lo utilizamos cuando queremos pasarle directamente los detalles del evento y nada mas
                
                La pagina con mas informacion sobre los eventos es: https://es.legacy.reactjs.org/docs/events.html
                El video de fernando herrera que lo explica mejor es: https://www.youtube.com/watch?v=bAMB0PO3E5Q&list=PLCKuOXG0bPi3x4cAt07EElVqk74hWb9ak&index=39
            */}
                log event
            </button>
            <button onClick={handleCounter}>
                +1
            </button>
        </>
    );

}

CounterApp.propTypes = { // Definimos la estructura de el prop value
    value: PropTypes.number.isRequired // tipo number y requerido
}

/*
    Como funciona useState internamente

    const useState = ( valor ) => {
        return [ valor, ()=>{console.log('Hola mundo')} ]; // La funcion retornada no necesariamente es un console log
    }

    const [ nombre, setNombre ] = useState( 'Goku' ); // Segun lo que retorna use state, en el primer indice se guarda lo mismo que pasamos y en el segundo una funcion
*/