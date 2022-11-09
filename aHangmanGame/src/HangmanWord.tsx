export function HangmanWord() {
  const word = "text"
  const guessedLetters = "e"
  return(
    <div style={{
      display: "flex",
      textTransform: "uppercase",
      gap: ".25em",
      fontWeight: "bolder",
      fontSize: "5rem",
      fontFamily: "sans-serif"
    }}>
    {word.split("").map((letter, index) => (
      <span style={{ borderBottom: "10px solid black" }} key={index}>
        <span style={{ visibility: guessedLetters.includes(letter)? "visible" : "hidden" }}>{letter}</span>
      </span>
    ))}
    </div>
  )
}
