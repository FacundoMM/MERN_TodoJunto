import { useState } from "react"
import Formulario from "../Components/Formulario"
import Resultados from "../Components/Resultados"

function App() {
  const [states, setstate] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirm: ""
  })

  return (
    <>
      <Formulario inputs={states} setInputs={setstate}/>
      <Resultados data={states} />

    </>
  )
}

export default App
