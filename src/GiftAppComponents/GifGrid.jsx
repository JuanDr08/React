
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
import { getGifs } from "./helpers/getGifs" // Pero al ser javascript, podemos separar las querys en un archivo externo e importar sus funciones para ser usadas aca en el componente


export const GifGrid = ({ category }) => {

    getGifs(category)

    return (
        <>
            <h3> { category } </h3>
        </>
    )

}