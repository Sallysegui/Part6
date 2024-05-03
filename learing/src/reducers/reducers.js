const blogReducer = (state = [], action) => {
  switch(action.type) {
    case 'NEW_BLOG':
      return state.concat(action.payload)
    case 'TOGGLE_IMPORTANCE': {
      const id = action.payload.id
      const blogToChange = state.find(n => n.id === id)
      const changedBlog = { 
        ...noteToChange, 
        important: !blogToChange.important 
      }
      return state.map(blog =>
        blog .id !== id ? blog  : changedBlog 
      )
     }
    default:
      return state
  }
}

export default blogReducer