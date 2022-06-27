import { nanoid } from '@reduxjs/toolkit'
import React, { FC, ReactHTMLElement, useState } from 'react'
import { useAppDispatch } from '../../hooks/hook'
import { setPosts } from '../../store/slices/postsSlice'
import styles from './Modal.module.scss'

type ModalTypeProps = {
  visible: boolean
  setVisible: (visible: boolean) => void
}

const Modal: FC<ModalTypeProps> = ({ visible, setVisible }) => {
  const style = {
    display: visible ? 'block' : 'none',
  }

  const dispatch = useAppDispatch()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value)
  }

  const onSave = () => {
    const post = {
      id: nanoid(),
      title,
      content,
    }
    dispatch(setPosts(post))
    setTitle('')
    setContent('')
    setVisible(false)
  }

  const onCancel = () => {
    setVisible(false)
  }

  return (
    <section style={style} className={styles.modalContainer}>
      <div className={styles.modalForm}>
        <form action="">
          <label>
            Title:
            <input
              type="text"
              onChange={(e) => onChangeTitle(e)}
              value={title}
              autoComplete="off"
            />
          </label>
          <label>
            Content:
            <input
              type="text"
              onChange={(e) => onChangeContent(e)}
              value={content}
              autoComplete="off"
            />
          </label>
        </form>
        <div className={styles.modalButtonContainer}>
          <button className={styles.modalButton} onClick={onCancel}>
            Отменить
          </button>
          <button className={styles.modalButton} onClick={onSave}>
            Сохранить
          </button>
        </div>
      </div>
    </section>
  )
}

export default Modal
