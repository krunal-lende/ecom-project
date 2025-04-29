import React from 'react'
import styles from './footer.module.css'

const Footer = ({children}) => {
  return (
    <div>
       <footer className={styles.footer}>
      {children}
    </footer>
    </div>
  )
}

export default Footer
