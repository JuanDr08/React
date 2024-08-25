
/* const getGifs = async (category) => { // Este tipo de funciones no debe de ir dentro del componente, ya que cada vez que el componente vuelva a ejecutarse volverá a ejecutarse la funcion
    y por consecuencia volverá a realizar la peticion http
    Esta funcion lo unico que requiere del componente es la categoria, pero esta podemos pasarla a traves de los parametros, por lo que podemos permitirnos mover la funcion fuera del componente

    const url = `https://api.giphy.com/v1/gifs/search?api_key=8IbCERnhkF09iUxVbuFL9fTYbTt7OZpq&q=${ category }&limit=20`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => (
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }) )

} */
import { useEffect, useState } from "react"
import { GifItem } from "./GifItem";
import { getGifs } from "./helpers/getGifs" // Pero al ser javascript, podemos separar las querys en un archivo externo e importar sus funciones para ser usadas aca en el componente
import { useFetchGifs } from "./hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    /* getGifs(category)  Esto es un problema, ya que la peticion se esta ejecutando cada vez que el componente cambia de estado, en parte si quitamos el strict mode
    puede llegar a solucionarlo, ya que es algo que hace react para asegurarse de que el componente esta funcionando
    pero de igual manera cada vez que cambiamos el estado, la misma funcion se ejecuta, y lo que queremos, es que al igual que con los useState
    se mantiga una unica vez dicha llamada a la funcion y no haga falta volverla a llamar
    */

    // const [images, setImages] = useState( [] ); // Estado para guardar imagenes

    // El hook useEffect sirve para disparar efectos secundarios, es decir, ejecutar un proceso que queramos cuando algo suceda, por ejemplo, cuando un estado cambie, cuando el
    // componente se renderize por primera vez, etc..., podemos dispararlos en cualquier que queramos
    /*
    useEffect( () => { Comentado porque usare el hook personalizado

        getGifs(category).then(img => setImages(img)); // El efecto o codigo que queremos ejecutar

    }, [ ] ) */ // recibe dos parametros, el primero es un callback con el efecto que queremos ejecutar y el segundo es la dependencia, es decir, las condiciones en
    // las que se va a ejecutar, este segundo es opcional y es un arreglo en donde iran todas nuestras dependencias, si lo dejamos vacio querra decir que este hook se ejecutará
    // una unica vez cuando se crea y se construye el componente
    // Cada que mandemos una nueva categoria, va a parecer como que vuelve y se ejecuta, pero no, porque cada categoria lo que hace es crear un nuevo componente GifGrid y 
    // cada componente es unico a los demas por lo que cada vez que se crea un componente GifGrid se esta llamando la unica vez que dicho componente se crea y ya
    // El useEffect no puede ser asincrono ya que implicitamente esta retornando una promesa, y eso no le gusta, ya que el useEffect debe retornar una funcion, por lo que
    // internamente no podriamos usar async/await

    /* Tenemos dos formas de poder acceder a datos de promesas, una puede ser dentro del useEffect usar el .then, o otra es crear otra funcion aparte, que esta si pueda ser
    asincrona y dentro de esta ahi si llamar al getGifs y dicha funcion sería la que deberiamos llamar en el useEffect, para hacerlo mas corto yo lo haré con .then, pero aca
    hay un ejemplo de como seria dicha funcion

    const getImages = async () => {
        const img = await getGifs( category );
        setImages( img );
    }
    useEffect( () => {
        getImages();
    }, [ ] ) 
    */

    // Toda la logica que tenemos arriba se podria abstraer y simplificar usando y creando un hook personalizado, todo quedaria simplificado a literalmente esta linea:
    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3> { category } </h3>
            {isLoading && <p>Loading...</p>}
            <div className="card-grid"> { /* Como estamos trabajando en javascript, no podemos usar la palabra reservada ' class ' ya que esta palabra en javascrip es para crear un objeto
            por lo que el equipo de react decidio que las clases se definieran con className='', para evitar conflictos semanticos, etonces con class name le podemos asignar clases
            a los componentes
            */ }            
                { images.map( data => (
                    <GifItem key={ data.id }
                        // Para pasarle los datos a nuestro componente hijo gifItem podriamos hacerlo de la manera tradicional que es por ejemplo title={ data.title }, pero hay una
                        // fomar mejor, y es ' espaciendo ' las propiedades, que basicament es con el operador spread, desestructurar el objeto y pasarle sus campos como props a nuestro
                        // hijo
                        { ...data } // le pasamos todos los datos nuestro componente hijo, y en el podemos desestructura los datos sin problema, este metodo nos funciona para cuando hay
                        // gran cantidad de datos
                    />
                ) ) }
            </div>
        </>
    )

}