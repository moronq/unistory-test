import React, { FC, ReactNode } from 'react'
import styles from './Modal.module.scss'

type ModalTypeProps = {
  children: JSX.Element
  visible: boolean
}

const Modal: FC<ModalTypeProps> = ({ children, visible }) => {
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
