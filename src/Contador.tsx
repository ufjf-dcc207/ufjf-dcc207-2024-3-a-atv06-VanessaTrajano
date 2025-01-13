import { useState } from 'react'
import './Contador.css'

interface ContadorProps {
    emoji: String;
}

function Contador({emoji}: ContadorProps) {
    const [quant, setQuant] = useState(5);

    function melhorar(){
        const aux = quant;
        if(aux == 5){
            setQuant(0);
        } else {
            setQuant(aux+1)
        }
    }

  return (
    <div className='contador-container'>
        <span>{emoji.repeat(quant)}</span>
        <span className='cinza'>{emoji.repeat(5 - quant)}</span>
        <button className='botao-contador' onClick={melhorar}>+</button>
    </div>
  )
}

export default Contador
