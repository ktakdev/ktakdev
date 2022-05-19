import { useState } from 'react'
import styles from '@styles/Menu.module.css'

export default function Menu() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <div className={styles.menuButton} onClick={() => setOpen(true)}>
        MENU
      </div>
      <div onClick={() => setOpen(false)}>
        <div
          className={
            open
              ? [styles.menuOverlay, styles.open].join(' ')
              : styles.menuOverlay
          }
          onClick={() => setOpen(false)}
        ></div>
        <div
          className={open ? [styles.side, styles.open].join(' ') : styles.side}
          onClick={(e) => e.stopPropagation()}
        ></div>
      </div>
    </div>
  )
}
