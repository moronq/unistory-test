import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <>
      <p>404 страница не найдена</p>
      <Link to={'/posts'}>Вернуться в безопасность</Link>
    </>
  )
}

export default NotFoundPage
