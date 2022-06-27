import React, { FC, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ModalDelete from '../../components/ModalDelete/ModalDelete'
import { useAppDispatch, useAppSelector } from '../../hooks/hook'
import { changePost, deletePost } from '../../store/slices/postsSlice'
import { PostType } from '../../types/postType'
import styles from './Post.module.scss'

const Post: FC = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const post = useAppSelector((state) =>
    state.posts.posts.find((el) => el.id === id)
  )

  const [title, setTitle] = useState(post?.title)
  const [content, setContent] = useState(post?.content)
  const [modalVisible, setModalVisible] = useState(false)

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value)
  }

  const goBack = () => {
    navigate(-1)
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

  return (
    <>
      <section>
        <button onClick={goBack}>Назад</button>
        <h3>{`Запись "${post?.title}"`}</h3>
        <form>
          <label htmlFor="">
            <input type="text" value={title} onChange={onChangeTitle} />
          </label>
          <label htmlFor="">
            <input type="text" value={content} onChange={onChangeContent} />
          </label>
        </form>
        <button onClick={onDelete}>Удалить</button>
        <button onClick={onSave}>Сохранить</button>
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
