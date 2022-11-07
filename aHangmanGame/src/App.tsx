import { useState } from "react"
import words from "./wordlist.json"

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  return <h1>Hi</h1>
}

export default App
