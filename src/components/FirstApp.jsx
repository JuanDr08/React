// React recomienda que el javascript que no va a tener que estarse cargando continuamente en el componente lo coloquemos por fuera del componente,
// es decir, por estas zonas, mayormente cuando dichas funciones o codigo javascript no depende de lo que haya internamente del funcional component,
// dado el caso que una funcion o algo de js dependa de lo que tenemos dentro del functional component entonces ahi si deberiamos pasarlo ahi dentro

const pruebaProp = () => {
    return "Se completó"
}

export const FirstApp = ({title, number}) => { // Los ' parametros ' (en realidad son props) basicamente son propiedades que se le pueden pasar al componente hijo
    // para ser usadas en la renderizacion del componente, los props se le pasan al componente hijo como atributos al momento de crear su etiqueta en algun componente padre
    // Los props al llegar al componente que los recibe le llegan como un objeto, pero de la forma en la que lo tengo plazmado estan siendo desestructurados directamente
    /*
        Los props se suelen asignar de la siguiente manera en el componente padre: <FirstApp title="Un titulo" number="123" />

        Si llegado el caso no se le llega a pasar un prop de los que hemos definido en el hijo, esto podria llegar a quedar como undefined, pero para esto si queremos podemos
        asignar valores por defecto si llegado el caso no se llegan a pasar, esto se hace asi
        {title="Titulo por defecto", number=123} esto hara que si llegado el caso en las props no le pasamos el titulo o el numero, se asignaran esos que les pusimos de defecto
        Por ejemplo: 
        <FirstApp number="123" /> solo le pasamos el number entonces se asignara por defecto el titulo que pusimos

        - Como number lo logico es que esperará un numero y no un string podemos especificar de una manera especial una propiedad sin tener que usar las ""
        <FirstApp number={123} /> con las llaves es como si le estuvieramos pasando algun tipo de expresion de javascript o algun tipo de dato diferente a una cadena
        de esta manera el prop number almacenaria un entero y no un string, y de title pondria el por defecto ya que no se especifico
    */ 

    let hola ={ // Objeto que podemos usar para ostrar en el HTML
        nombre: "juan"
    }
    
    return (
        // React tiene una regla en los componentes y es que siempre se debe regresar un unico nodo padre, es decir, siempre debe regresar un unico elemento, por ejemplo
        /*
            - No podemos regresar dos nodos en seco
                <h1> FirstApp </h1>
                <p>Soy un parrafo</p> 
            - Debemos agruparlos en un unico nodo padre que los contenga
                <div> - el div será el nodo en si que se devuelve en la funcion, y dentro del div va el contenido que queramos
                    <h1> FirstApp </h1>
                    <p>Soy un parrafo</p>    
                </div>
        */
        // pero si quisieramos que nuestro componente tuviera mas etiquetas y mas contenido lo ideal seria que lo agruparamos en un nodo padre no?, como en un div
        // o algo que lo agrupe, pero esto nos obligaria a genererar un div para nada y que posiblmente nos rompa nuestro componente en cuanto a estilos como el ejemplo
        // anterior
        // Para este problema react presento una solucion con los 'Fragmentos', los cuales nos permiten agrupar multiples nodos o contenido que queramos en un nodo
        // ' invisible ' para poder retornarlo y al momento de renderizarlo en la pagina, este fragmento desaparece quedando sus etiquetas internas como si no estuvieran
        // agrupadas por un nodo padre, estos fragmentos fueron creados especialmente para eso, cuando necesitemos de multiple contenido de etiquetas pero react solo nos
        // deja devolver de a una entonces las agrupamos en un fragmento para simular un padre y devolverlo, para que posteriormente desaparezca
        /*
        - Esta es una forma de hacerlo, importando los fragmentos y utilizandolos en las etiquetas, pero da pereza tener que andar importando a cada rato los fragments
            import {Fragment} from 'react'; Importamos los fragmentos
            <Fragment>
                <h1> FirstApp </h1>
                <p>Soy un parrafo</p>    
            </Fragment>

        - La forma mas elegante y sin tener que importar los fragmentos es con su sinonimo
            <> Las etiquetas vacias son sinonimos o representantes de fragmentos, cumplen su misma funcion y es lo mas usado
                <h1> FirstApp </h1>
                <p>Soy un parrafo</p>    
            </>
        */
        <>
            {/* Para poder renderizar variables en html usamos las ' {} ' y dentro van las expresiones JS que queramos, menos objetos, ya que objetos directos
                no podemos imprimir, tendriamos que acceder con el ' . ' a sus campos o serializarlo con JSON.stringify()
            */}
            <h1> { hola.nombre.toLocaleUpperCase() } </h1>
            <h1> { title } </h1> {/* Accedemos a las propiedades pasadas por los props */}
            <p> { number } </p>
            <p>Soy un parrafo</p>
        </>

    )
}