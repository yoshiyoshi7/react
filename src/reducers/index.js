import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import {responsiveStateReducer} from 'redux-responsive'
import {responsiveDrawer} from 'material-ui-responsive-drawer'

const reducers = combineReducers({
  todos,
  visibilityFilter,
  browser: responsiveStateReducer,
  responsiveDrawer: responsiveDrawer
})

export default reducers
