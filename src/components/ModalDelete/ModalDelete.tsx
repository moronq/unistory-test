import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/hook'
import { deletePost } from '../../store/slices/postsSlice'
import styles from './ModalDelete.module.scss'

type ModalDeleteTypeProps = {
  id: string
  visible: boolean
  setModalVisible: (visible: boolean) => void
}

const ModalDelete: FC<ModalDeleteTypeProps> = ({
  id,
  visible,
  setModalVisible,
}) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onDelete = () => {
    dispatch(deletePost(id))
    navigate('/posts')
  }

  const hideModal = () => {
    setModalVisible(false)
  }

  const style = {
    display: visible ? 'block' : 'none',
  }

  return (
    <section style={style} className={styles.modalContainer}>
      <div className={styles.modalFormContainer}>
        <p className={styles.modalMessage}>
          {' '}
          Вы действительно хотите удалить событие?
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.deleteButton} onClick={onDelete}>
            Удалить
          </button>
          <button className={styles.cancelButton} onClick={hideModal}>
            Отмненить
          </button>
        </div>
      </div>
    </section>
  )
}

export default ModalDelete
