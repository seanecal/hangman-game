import { useCallback, useEffect, useState } from "react"
import { HangmanDrawing } from "./HangmanDrawing"
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";
import words from "./wordlist.json"

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback((letter:string) => {
    if (guessedLetters.includes(letter) || isLoser || isWinner) return

    setGuessedLetters(currentLetters => [...currentLetters, letter])
  },[guessedLetters, isWinner, isLoser])

  useEffect(() => {
    const handleKeypress = (e: KeyboardEvent) => {
      const key = e.key

      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      setGuessedLetters([])
      addGuessedLetter(key)
    }

    document.addEventListener("keypress",  handleKeypress)
    return () => {
      document.removeEventListener("keypress", handleKeypress)
    }
  },[guessedLetters])

  useEffect(() => {
    const handelKeypress = (e: KeyboardEvent) => {
      const key = e.key
      if (key !== "Enter") return

      e.preventDefault
      setWordToGuess(getWord())
    }

    document.addEventListener("keypress", handelKeypress)
    return () => {
      document.removeEventListener("keypress", handelKeypress)
    }
  })

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
        {isLoser && "You lost!"}
        {isWinner && "You won!"}
      </div>
      <HangmanDrawing numberOfWrongGuesses = { incorrectLetters.length }/>
      <HangmanWord reveal={isLoser} guessedLetters = {guessedLetters} wordToGuess={wordToGuess}/>
      <Keyboard activeLetters = {guessedLetters.filter(letter => wordToGuess.includes(letter))}
      inactiveLetters = {incorrectLetters}
      addGuessedLetter = {addGuessedLetter}
      disabled={ isWinner|| isLoser }
      />
  </div>
}

export default App
