import styles from "./Keyboard.module.css";

const KEYS =  "abcdefghijklmnopqrstuvwxyz".split("")

type KeyboardProps = {
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void
  disabled?: boolean
}

export function Keyboard({ activeLetters, inactiveLetters, addGuessedLetter, disabled=false }: KeyboardProps) {
  return (
    <div>
      {KEYS.map(key => {
        const isActive = activeLetters.includes(key)
        const notActive = inactiveLetters.includes(key)
        return(
          <button onClick={()=> addGuessedLetter(key)} className={`${styles.btn} ${isActive ? styles.active : ""} ${notActive ? styles.inactive : ""}`} disabled={isActive || notActive || disabled} key={key}>
            {key.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}
