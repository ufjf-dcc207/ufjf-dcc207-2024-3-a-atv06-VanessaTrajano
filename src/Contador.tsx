import { useState } from 'react'
import './Contador.css'

function Contador(emoji: String) {
    const [quant, setQuant] = useState(0);

    function melhorar(){
        const aux = quant;
        if(aux == 5){
            setQuant(0);
        } else {
            setQuant(aux+1)
        }
    }

  return (
    <div>
        <span>{emoji.repeat(quant)}</span>
        <span className='cinza'>{emoji.repeat(5 - quant)}</span>
        <button onClick={melhorar}>UP</button>
    </div>
  )
}

export default Contador
