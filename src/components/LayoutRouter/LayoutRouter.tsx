import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './LayoutRouter.module.scss'

const LayoutRouter: FC = () => {
  return (
    <main className={styles.app}>
      <div className={styles.appContainer}>
        <Outlet />
      </div>
    </main>
  )
}

export default LayoutRouter
