import styles from "./Keyboard.module.css";

const KEYS =  "abcdefghijklmnopqrstuvwxyz".split("")

export function Keyboard() {
  return (
    <div>
      {KEYS.map(key => {
        return(
          <button className={styles.btn} key={key}>
            {key.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}
