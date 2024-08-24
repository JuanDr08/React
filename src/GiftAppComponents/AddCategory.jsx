import { useState } from "react"


export const AddCategory = ({onAddCategory}) => { // Va recibir un prop, el cual se espera que sea una funcion que nos permita cambiar el estado del componente padre

    const [inputValue, setInputValue ] = useState('')

    const onInputChange = (e) => { // Funcion que cambia el valor de inputValue segun lo que el usuario vaya registrando

        setInputValue(e.target.value)

    }

    const onSubmit = (e) => { // funcion que se realiza cada cada que se da enter o se hace envio de algun formulario

        e.preventDefault()

        if(inputValue.trim().length <= 1) return; // Validacion para que no se pueda hacer submit de espacios en blanco o envios de un solo caracter

        onAddCategory( inputValue.trim() ) // cuando se activa la funcion, usamos el prop que se nos fue pasado para cambiar el estado del componente padre, asisgnandole un nuevo valor
        // con la categoria nueva que se escribio en el valor del input

        /* Si hubiesemos pasado directamente el setCategories, el que modifica el estado, podriamos haber hecho algo asi

        setCategories(category => [...category, inputValue] ) Ya que recordemos que si realizamos una funcion en el setCategories o el set de algun useState, este nos pasara
        directamente como argumento el estado actual en el que esta la categoria en este caso

        */

        setInputValue(''); // Luego de hacer el envio del input, reseteamos lo que hay en su valor para que quede limpio y volver a escribir de manerá mas comoda

    }

    return (

        <form onSubmit={ onSubmit }> {/* Evento que escucha cuando se presiona enter o se hace envio del formulario para realizar una accion */}
            <input 
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange } // Evento que escucha cada cambio de nuestro imput, cada que cambie ejecutará una acción
            />
        </form>

    )

}