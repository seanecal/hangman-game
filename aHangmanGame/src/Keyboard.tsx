import styles from "./Keyboard.module.css";

const KEYS =  "abcdefghijklmnopqrstuvwxyz".split("")

type KeyboardProps = {
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void
}

export function Keyboard({ activeLetters, inactiveLetters, addGuessedLetter }: KeyboardProps) {
  return (
    <div>
      {KEYS.map(key => {
        const isActive = activeLetters.includes(key)
        const notActive = inactiveLetters.includes(key)
        return(
          <button onClick={()=> addGuessedLetter(key)} className={`${styles.btn} ${isActive ? styles.active : ""} ${notActive ? styles.inactive : ""}`} disabled={isActive || notActive} key={key}>
            {key.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}
