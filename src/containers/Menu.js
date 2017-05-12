import React from 'react'
import { connect } from 'react-redux'
import {ResponsiveDrawer} from 'material-ui-responsive-drawer'
import MenuItem from 'material-ui/MenuItem';
import {selectReddit} from '../actions'

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
  }
}

let Menu = ({ dispatch }) => {

    return (
    <ResponsiveDrawer>
      <div style={styles.drawer_container}>
        <div style={styles.drawer_header_container}>
          <h1 style={styles.drawer_header}>カテゴリ</h1>
          <MenuItem
            primaryText="IT" onTouchTap={() => dispatch(selectReddit("its"))}/>
          <MenuItem
            primaryText="SOCIALGAME" onTouchTap={() => dispatch(selectReddit("socialgames"))}/>
        </div>
      </div>
    </ResponsiveDrawer>
    )

}
Menu = connect()(Menu)

export default Menu