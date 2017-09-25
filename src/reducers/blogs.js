const blogs = ( state = [], action ) => {
  switch(action.type) {
    case 'BLOGS':
      return action.blogs
    case 'ADD_BlOG':
      return [action.blog, ...state];
    case 'TOGGLE_BLOG':
      return state.map( blog => {
        if (blog.id === action.id)
          return {...blog}
        return blog
      })
    case 'UPDATE_BLOG':
      return state.map( b => {
        if (b.id === action.blog.id)
          return action.blog
        return b
      })
    case 'DELETE_BLOG':
      return state.filter( b => b.id !== action.id )
    default:
      return state
  }
}

export default blogs;
