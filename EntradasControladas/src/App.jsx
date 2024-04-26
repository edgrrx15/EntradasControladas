
import { useState } from "react"
import './index.css'

function App() {
  const [miTexto, setMiTexto] = useState('')

  const handleText = (event) => {
    event.preventDefault()
    setMiTexto(event.target.value)
  }

  return (
      <div>
      <form>
        <h3>Capture su texto:</h3>
        <input 
          type="text"
          value={miTexto} 
          onChange={handleText}
          placeholder="Escribe aquí..."
        />
      </form>
        <h1>Su Texto: </h1>
        <p>
            {miTexto}
        </p>
      </div>
  )
}

export default App
