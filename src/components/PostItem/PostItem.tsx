import React, { FC } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from './PostItem.module.scss'

type PostItemTypeProps = {
  title: string
  content: string
  id: string
}

const PostItem: FC<PostItemTypeProps> = ({ title, content, id }) => {
  return (
    <li className={styles.postContainer}>
      <h3 className={styles.postTitle}>{title}</h3>
      <article className={styles.postContent}>
        <p className={styles.postText}>{content}</p>
      </article>
      <button className={styles.postButton}>
        <Link className={styles.postLink} to={`/post/${id}`}>
          Перейти
        </Link>
      </button>
    </li>
  )
}

export default PostItem
