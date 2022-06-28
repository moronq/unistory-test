import { FC } from 'react'
import { Link } from 'react-router-dom'
import { trimText } from '../../utils/trimText'
import styles from './PostItem.module.scss'

type PostItemTypeProps = {
  title: string
  content: string
  id: string
}

const PostItem: FC<PostItemTypeProps> = ({ title, content, id }) => {
  return (
    <li className={styles.postContainer}>
      <h3 className={styles.postTitle}>{trimText(title, 25)}</h3>
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
