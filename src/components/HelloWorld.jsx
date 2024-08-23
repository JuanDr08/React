// Todo en react comieza con un functional component, dichos componentes no son mas que una funcion, la cual retorna un componente en html
// Lo exportamos para poder utilizaron en el main
export function App () { // Nuestros componentes siempre todos deben de ir capitalizados con UpperCamelCase
    return <h1>Hola mundo</h1>; // jsx nos permite escribir codigo html sin problemas, e internamente es como si hicieramos un document.createElement... en javascript
}