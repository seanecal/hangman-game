type HangmanWordProps = {
  guessedLetters: string[]
  wordToGuess: string
}

export function HangmanWord({ guessedLetters, wordToGuess }: HangmanWordProps) {
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
        <span style={{ visibility: guessedLetters.includes(letter)? "visible" : "hidden" }}>{letter}</span>
      </span>
    ))}
    </div>
  )
}
