import { nanoid } from '@reduxjs/toolkit'
import React, { FC, ReactHTMLElement, useState } from 'react'
import { useAppDispatch } from '../../hooks/hook'
import { setPosts } from '../../store/slices/postsSlice'
import styles from './ModalCreate.module.scss'

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

  const isDisabled = content.trim() === '' || title.trim() === ''

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  const onSave = () => {
    const post = {
      id: nanoid(),
      title: title.trim(),
      content: content.trim(),
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
      <div className={styles.modalFormContainer}>
        <form className={styles.modalForm} action="">
          <label className={styles.titleLabel}>
            Title:
            <input
              className={styles.titleInput}
              type="text"
              onChange={(e) => onChangeTitle(e)}
              value={title}
              autoComplete="off"
            />
          </label>
          <label className={styles.contentLabel}>
            Content:
            <textarea
              className={styles.contentInput}
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
          <button
            className={styles.modalButton}
            onClick={onSave}
            disabled={isDisabled}
          >
            Сохранить
          </button>
        </div>
      </div>
    </section>
  )
}

export default Modal
