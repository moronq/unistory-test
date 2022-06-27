import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PostType } from '../../types/postType'

type initialStateType = {
  posts: Array<PostType>
}

const initialState: initialStateType = {
  posts: [
    { id: '1', title: 'dfsd', content: 'dsfd' },
    { id: '2', title: 'dfsd', content: 'dsfd' },
    { id: '3', title: 'dfsd', content: 'dsfd' },
    { id: '4', title: 'dfsd', content: 'dsfd' },
  ] as Array<PostType>,
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<PostType>) => {
      state.posts = [...state.posts, action.payload]
    },
    changePost: (state, action: PayloadAction<PostType>) => {
      state.posts = state.posts.map((el) => {
        if (el.id === action.payload.id) {
          return action.payload
        }
        return el
      })
    },
    deletePost: (state, action: PayloadAction<string>) => {
      const index = state.posts.findIndex((el) => el.id === action.payload)
      state.posts.splice(index, 1)
    },
  },
})

export const { setPosts, changePost, deletePost } = postsSlice.actions
export default postsSlice.reducer
