import {SELECT_REDDIT} from '../actions'
const selectedReddit = (state = 'its', action) => {
  switch (action.type) {
    case SELECT_REDDIT:
      return action.reddit
    default:
      return state
  }
}

export default selectedReddit