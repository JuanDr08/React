export const FirstApp = () => {
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
            <h1> FirstApp </h1>
            <p>Soy un parrafo</p>
        </>

    )
}