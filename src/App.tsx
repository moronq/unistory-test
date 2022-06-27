import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import LayoutRouter from './components/LayoutRouter/LayoutRouter'
import AllPosts from './pages/AllPosts/AllPosts'
import Post from './pages/Post/Post'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutRouter />}>
        <Route path="posts" element={<AllPosts />} />
        <Route path="post/:id" element={<Post />} />
        <Route path="*" element={<Navigate to={'/posts'} replace />} />
        <Route path="/" element={<Navigate to={'/posts'} replace />} />
      </Route>
    </Routes>
  )
}

export default App
