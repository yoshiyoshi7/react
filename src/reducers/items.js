import {
  REQUEST_POSTS, RECEIVE_POSTS
} from '../actions'

const items = (state = {
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state
      }
    case RECEIVE_POSTS:
      return {
        ...state,
        items: action.posts
      }
    default:
      return state
  }
}

export default items