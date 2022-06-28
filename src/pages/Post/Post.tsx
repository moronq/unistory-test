import React, { FC, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ModalDelete from '../../components/ModalDelete/ModalDelete'
import NotFoundPage from '../../components/NotFoundPage'
import { useAppDispatch, useAppSelector } from '../../hooks/hook'
import { changePost } from '../../store/slices/postsSlice'
import { PostType } from '../../types/postType'
import styles from './Post.module.scss'

const Post: FC = () => {
  const { id } = useParams()

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { posts } = useAppSelector((state) => state.posts)

  const post = useAppSelector((state) =>
    state.posts.posts.find((el) => el.id === id)
  )

  const [title, setTitle] = useState((post as PostType)?.title || '')
  const [content, setContent] = useState((post as PostType)?.content || '')
  const [modalVisible, setModalVisible] = useState(false)

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  const isDisabled = content.trim() === '' || title.trim() === ''

  const goBack = () => {
    navigate('/posts')
  }

  const onSave = () => {
    const post = {
      id,
      title,
      content,
    }
    dispatch(changePost(post as PostType))
    goBack()
  }

  const onDelete = () => {
    setModalVisible(true)
  }

  if (!posts.find((el) => el.id === id)) {
    return <NotFoundPage />
  }

  return (
    <>
      <section className={styles.postContainer}>
        <button className={styles.backButton} onClick={goBack}>
          Назад
        </button>
        <h3 className={styles.postTitle}>{`Запись "${post?.title}"`}</h3>
        <form className={styles.formPost}>
          <label className={styles.titleLabel}>
            Title:
            <input
              className={styles.titleInput}
              type="text"
              name="title"
              value={title}
              onChange={onChangeTitle}
            />
          </label>
          <label className={styles.contentLabel}>
            Content:
            <textarea
              className={styles.contentInput}
              value={content}
              onChange={onChangeContent}
            />
          </label>
        </form>
        <div className={styles.buttonContainer}>
          <button className={styles.deleteButton} onClick={onDelete}>
            Удалить
          </button>
          <button
            className={styles.saveButton}
            onClick={onSave}
            disabled={isDisabled}
          >
            Сохранить
          </button>
        </div>
      </section>
      <ModalDelete
        id={id as string}
        visible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  )
}

export default Post
