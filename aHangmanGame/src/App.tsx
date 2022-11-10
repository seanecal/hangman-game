import { useState } from "react"
import { HangmanDrawing } from "./HangmanDrawing"
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";
import words from "./wordlist.json"

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

  return <div
    style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      alignItems: "center"
    }}
    >
      <div style={{fontSize: "2rem", textAlign: "center"}}>
       Lose Win
      </div>
      <HangmanDrawing numberOfWrongGuesses = { incorrectLetters.length }/>
      <HangmanWord />
      <Keyboard />
  </div>
}

export default App
