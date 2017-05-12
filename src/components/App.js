import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Menu from '../containers/Menu'
import ItemList from '../containers/ItemList'
import {
  BodyContainer,
  ResponsiveAppBar
} from 'material-ui-responsive-drawer'
import FlatButton from 'material-ui/FlatButton';

const styles = {
  body_header: {
    margin: '0px',
    padding: '10px'
  }
}

const App = () => (
  <div>
    <Menu />
    <BodyContainer>
      <ResponsiveAppBar
        title={'Responsive Material-UI Drawer DEMO'}
        iconElementRight={<FlatButton label="Demo" />}
      />
      <div style={{ margin: '10px' }}>
        <h1 style={styles.body_header}>Body</h1>
        <ItemList />
      </div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </BodyContainer>
  </div>
)

export default App

// <AddTodo />
// <VisibleTodoList />
// <Footer />