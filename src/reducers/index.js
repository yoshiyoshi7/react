import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import items from './items'
import selectedReddit from './selectedReddit'
import {responsiveStateReducer} from 'redux-responsive'
import {responsiveDrawer} from 'material-ui-responsive-drawer'

const reducers = combineReducers({
  todos,
  visibilityFilter,
  items,
  selectedReddit,
  browser: responsiveStateReducer,
  responsiveDrawer: responsiveDrawer
})

export default reducers
