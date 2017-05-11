export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_REDDIT = 'SELECT_REDDIT'

let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

export const selectReddit = reddit => ({
  type: SELECT_REDDIT,
  reddit
})

export const requestPosts = reddit => ({
  type: REQUEST_POSTS
})

export const receivePosts = (reddit, json) => ({
  type: RECEIVE_POSTS,
  reddit,
  posts: json.map(item => item)
})

const fetchPosts = reddit => dispatch => {
  dispatch(requestPosts(reddit), {mode: 'cors'})
  return fetch(`http://localhost:3000/items_its`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(reddit, json)))
}

export const fetchPostsIfNeeded = reddit => (dispatch, getState) => {
  return dispatch(fetchPosts(reddit))
}


