import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/hook'
import { deletePost } from '../../store/slices/postsSlice'

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
    navigate(-1)
  }

  const hideModal = () => {
    setModalVisible(false)
  }

  const style = {
    display: visible ? 'block' : 'none',
  }

  return (
    <section style={style}>
      <div>
        <p> Вы действительно хотите удалить событие?</p>
        <div>
          <button onClick={onDelete}>Удалить</button>
          <button onClick={hideModal}>Отмненить</button>
        </div>
      </div>
    </section>
  )
}

export default ModalDelete
