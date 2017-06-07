import React from 'react'
import Menu from '../containers/Menu'
import ItemList from '../containers/ItemList'
import {
  BodyContainer,
  ResponsiveAppBar
} from 'material-ui-responsive-drawer'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward';
import Back2Top from 'react-back2top';

const styles = {
  body_header: {
    margin: '0px',
    padding: '10px'
  },

  floating_arrow: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
    zIndex: '9999'
  }

}

const App = () => (
  <div>
    <Menu />
    <BodyContainer>
      <ResponsiveAppBar
        title={'Matome'}
        iconElementRight={
          <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
          >
            <MenuItem primaryText="Comming Soon..." />
          </IconMenu>
        }
      />
      <div style={{ margin: '10px' }}>
        <h1 style={styles.body_header}>Body</h1>
        <ItemList />
      </div>
      <Back2Top>
        <FloatingActionButton style={styles.floating_arrow}><ArrowUpward /></FloatingActionButton>
      </Back2Top>
    </BodyContainer>
  </div>
)

export default App

// <AddTodo />
// <VisibleTodoList />
// <Footer />