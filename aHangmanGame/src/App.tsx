import { useEffect, useState } from "react"
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

  function addGuessedLetter(letter:string) {
    if (guessedLetters.includes(letter)) return

    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }

  useEffect(() => {
    const handleKeypress = (e: KeyboardEvent) => {
      const key = e.key

      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keypress",  handleKeypress)
    return () => {
      document.removeEventListener("keypress", handleKeypress)
    }
  },[guessedLetters])

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
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
      <Keyboard />
  </div>
}

export default App
