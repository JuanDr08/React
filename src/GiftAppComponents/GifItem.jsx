

export const GifItem = ({id, title, url}) => { // podemos desestructurar cuanto queramos ya que le estamos pasando todo el objeto con sus campos como props a este componente
    // mediante el operador spread
    return (
        <div className="card">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}