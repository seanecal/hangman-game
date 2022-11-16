type HangmanWordProps = {
  guessedLetters: string[]
  wordToGuess: string
  reveal?: boolean
}

export function HangmanWord({ guessedLetters, wordToGuess, reveal=false }: HangmanWordProps) {
  return(
    <div style={{
      display: "flex",
      textTransform: "uppercase",
      gap: ".25em",
      fontWeight: "bolder",
      fontSize: "5rem",
      fontFamily: "sans-serif"
    }}>
    {wordToGuess.split("").map((letter, index) => (
      <span style={{ borderBottom: "10px solid black" }}>
        <span style={{ visibility: guessedLetters.includes(letter)||reveal? "visible" : "hidden", color: !guessedLetters.includes(letter)&&reveal? "red":"black" }}>{letter}</span>
      </span>
    ))}
    </div>
  )
}
