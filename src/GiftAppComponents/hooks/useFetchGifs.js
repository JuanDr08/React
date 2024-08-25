import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

// Esto es un custom hook en donde abtraimos toda la logica de las imagenes que tenemos en el componente de GifGrid

export const useFetchGifs = (category) => { // un hook no es mas que una funcion que regresa algo, ese algo en este caso es un objeto en el que tenemos las imagenes y el isLoading

    const [images, setImages] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {

        getGifs(category).then(img => {
            setImages(img);
            setIsLoading(false);
        });

    }, [])

    return {
        images,
        isLoading
    }

}