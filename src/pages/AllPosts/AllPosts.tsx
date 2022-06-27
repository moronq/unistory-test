import React, { FC, useState } from 'react'
import Modal from '../../components/ModalForm/ModalForm'
import PostItem from '../../components/PostItem/PostItem'
import { useAppSelector } from '../../hooks/hook'
import styles from './AllPost.module.scss'

const AllPosts: FC = () => {
  const { posts } = useAppSelector((state) => state.posts)
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  const showModal: () => void = () => {
    setModalVisible(true)
  }
  return (
    <section className={styles.postsPageContainer}>
      <h2 className={styles.pageTitle}>Блог</h2>
      <div className={styles.postListContainer}>
        <ul className={styles.postList}>
          {posts.map((el) => {
            return (
              <PostItem
                key={el.id}
                id={el.id}
                title={el.title}
                content={el.content}
              />
            )
          })}
        </ul>
      </div>
      <button className={styles.addButton} onClick={showModal}>
        + Добавить
      </button>
      <Modal visible={modalVisible} setVisible={setModalVisible}></Modal>
    </section>
  )
}

export default AllPosts
