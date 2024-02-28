import React from "react"
import PersonCard from "../components/PersonCard"

function App() {
  return (
    <>
      <PersonCard
        name="Jane"
        lastName="Doe"
        age={45}
        hair="Black"
      />

      <PersonCard
        name="John"
        lastName="Smith"
        age={88}
        hair="Brown"
      />

      <PersonCard
        name="Millard"
        lastName="Fillmore"
        age={50}
        hair="Brown"
      />

      <PersonCard
        name="Maria"
        lastName="Smith"
        age={62}
        hair="Brown"
      />
    </>
  )
}

export default App
