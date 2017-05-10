import React from 'react'
// import Footer from './Footer'
// import AddTodo from '../containers/AddTodo'
// import VisibleTodoList from '../containers/VisibleTodoList'
import ItemList from '../containers/ItemList'
import {
  ResponsiveDrawer,
  BodyContainer,
  ResponsiveAppBar
} from 'material-ui-responsive-drawer'
import FlatButton from 'material-ui/FlatButton'
import MenuItem from 'material-ui/MenuItem';

const styles = {
  drawer_container: {
    height: '100%'
  },
  drawer_header: {
    margin: '0px',
    paddingBottom: '10px'
  },
  drawer_header_container: {
    padding: '10px'
  },
  body_header: {
    margin: '0px',
    padding: '10px'
  },
  responsive_toggler: {
    width: 250,
    paddingTop: 15
  }
}

const App = () => (
  <div>
    <ResponsiveDrawer>
      <div style={styles.drawer_container}>
        <div style={styles.drawer_header_container}>
          <h1 style={styles.drawer_header}>Drawer</h1>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </div>
      </div>
    </ResponsiveDrawer>
    <BodyContainer>
      <ResponsiveAppBar
        title={'Responsive Material-UI Drawer DEMO'}
        iconElementRight={<FlatButton label="Demo" />}
      />
      <div style={{ margin: '10px' }}>
        <h1 style={styles.body_header}>Body</h1>
        <ItemList />
      </div>
    </BodyContainer>

  </div>
)

export default App

// <AddTodo />
// <VisibleTodoList />
// <Footer />