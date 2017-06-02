import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import ItemList from '../containers/ItemList'
import DepPlans from '../components/DepPlans'
import SidebarContent from '../containers/sidebar_content';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward';
import Back2Top from 'react-back2top';
import {
  BodyContainer,
  ResponsiveAppBar
} from 'material-ui-responsive-drawer'

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <ItemList />
  },
  {
    path: '/socialgames',
    main: () => <ItemList />
  },
  {
    path: '/news',
    main: () => <ItemList />
  },
  {
    path: '/animegames',
    main: () => <ItemList />
  },
  {
    path: '/sports',
    main: () => <ItemList />
  },
  {
    path: '/lives',
    main: () => <ItemList />
  },
  {
    path: '/entertainers',
    main: () => <ItemList />
  },
  {
    path: '/overseas',
    main: () => <ItemList />
  },
  {
    path: '/new',
    main: () => <ItemList />
  },
  {
    path: '/ranking',
    main: () => <ItemList />
  },
  {
    path: '/under-development',
    main: () => <DepPlans />
  },
]

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


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
    console.log("open")
  }
  handleClose() { this.setState({ open: false }); }


  render() {

    return (
      <Router>
        <div>
          <SidebarContent />
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

              {routes.map((route, index) => (
                // Render more <Route>s with the same paths as
                // above, but different components this time.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}

              <Back2Top>
                <FloatingActionButton style={styles.floating_arrow}><ArrowUpward /></FloatingActionButton>
              </Back2Top>

            </div>
          </BodyContainer>





        </div>
      </Router>
    );
  }
}

export default App;

// <AddTodo />
// <VisibleTodoList />
// <Footer />