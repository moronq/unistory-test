import { FC, useEffect } from 'react'
import styles from './Modal.module.scss'

type ModalTypeProps = {
  children: JSX.Element
  visible: boolean
}

const Modal: FC<ModalTypeProps> = ({ children, visible }) => {
  useEffect(() => {
    if (visible) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'scroll'
    }
  }, [visible])

  const style = {
    display: visible ? 'block' : 'none',
  }

  return (
    <section style={style} className={styles.modalContainer}>
      {children}
    </section>
  )
}

export default Modal
