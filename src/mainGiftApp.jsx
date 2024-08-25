import React from "react";
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from "./GiftAppComponents/GiftExpertApp";

import './css/GiftAppStyles.css'

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode> {/* El modo estricto ayuda a identificar componentes que tiene problemas con lifecycel, codigo viejo y entre mas cosas, este modo estricto se aplica 
        unicamente en modo desarrollo, si llegamos a ver que algunas peticiones http se ' ejecutan ' dos veces, es por el modo estricto, ya que este lo ejecuta dos para 
        asegurarse de que nuestro componente se este desarrollando bien, pero una vez quitamos este modo en produccion ya va a dejar de llamar dos veces a dichas peticiones http
    */}
        <GifExpertApp />
    </React.StrictMode>

)