import PropTypes from 'prop-types'
import { useState } from 'react'; 




export const CounterApp = ({value}) => { 

    const [counter, setCounter] = useState(value) 
    
    
    

    const handleAdd = () => { 
        console.log(counter)
        setCounter( counter + 1 ) 
    }

    const handleReset = () => {
        setCounter( counter - counter )
    }

    const handleSubtract = () => {
        setCounter( counter - 1 )
    }

    return (
        <>
            <h1> CounterApp </h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd } >+1</button>
            <button onClick={ handleReset } >reset</button>
            <button onClick={ handleSubtract } >-1</button>
        </>
    );

}

CounterApp.propTypes = { 
    value: PropTypes.number.isRequired 
}