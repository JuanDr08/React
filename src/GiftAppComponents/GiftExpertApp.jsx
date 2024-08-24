import { useState } from "react"
import { AddCategory } from "./AddCategory"
import { GifGrid } from "./GifGrid"


export const GifExpertApp = () => {
    
    const [ categories, setCategories ] = useState(['One puch', 'Dragon Ball']) // Declaramos un useState que contendra un arreglo, al cual le podremos ir agregando mas categorias
    
    const onAddCategory = (arg) => { // Esta funcion se le pasará como prop al hijo para permitirle emitir datos a ella y desde el componente padre cambiar el estado

        if(categories.includes( arg )) return // Validamos que lo que se quiere agregar a categorias no este repetido

        setCategories([ arg, ...categories ]) // De esta forma agregamos un nuevo elemento al array de categorias, no se puede con el push ya que supongo que es por ser constante

    }

    return (

        <>
        
            <h1> GifExpertApp </h1>

            <AddCategory
                onAddCategory={ onAddCategory } // De esta manera estamos habilitando que el hijo emita datos al padre
                /* 
                    Le pasamos un prop a nuestro componente hijo, dicho prop será una funcion para que este pueda emitir un dato al padre y el padre pueda cambiar el estado
                    del componente desde su scope

                    Un patron que se repite demasiado en react, es que cuando se usa la palabra ' on ' hace referencia a que se esta emitiendo algo
                    es mas que todo orden semantico, no es obligatorio pero si puede ser un estandar cuando estamos emitiendo datos del hijo al padre
                */
                /* 
                setCategories={ setCategories }
                
                Este metodo esta bien, pero oculta la implementacion del codigo lo que lo hace mas dificil de leer, por lo que para esto lo mejor es emitir datos al padre
                y que este los cambie cuando los reciba

                */
            
            /> 

            
            {
                categories.map(category => (
                    <GifGrid key={ category } category={ category } />
                ))
            }
            

        </>

    )

}