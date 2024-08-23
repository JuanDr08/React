import React from 'react'; // Importacion de react
import ReactoDOM from 'react-dom/client' // Importaciones requeridas para renderizar nuestra pagina o aplicacion
import {App} from './components/HelloWorld' // En el archivo main por lo general no solemos crear ningun functional component, sino que debemos importar los que creamos
// en otros archivos y de ahi renderizarlos
import { FirstApp } from './components/FirstApp';
import './css/style.css'; // importacion de archivos que serán globales

ReactoDOM.createRoot( document.getElementById('root') ).render( // Basicamente seleccionamos el elemento root en donde se cargara toda nuestra aplicacion react y llamamos a la funcion render
    // para renderizar el functional component (componente en una funcion) que acabamos de crear

    // Dentro de el metodo render() ahora si podemos renderizar la funcion App, pero antes debemos renderizar React.strictMode (hay mas modos pero siempre se recomienda el modo estricto)
    // y dentro de este ahi si va nuestro componente

    // Llamamos a nuestra App como componente y la renderizamos en el elemento con id 'root' en el index.html
    <React.StrictMode> 
        <FirstApp title="Titulo de un prop" number={1 + 2} /> {/* Pasamos los props como atributos a la etiqueta hija, y en el number pasamos un valor personalizado diferente
            a un string, pueden ser expresiones js, variables, funciones etc...
        */}
    </React.StrictMode>
)