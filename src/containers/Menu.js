import React from 'react'
import { connect } from 'react-redux'
import { ResponsiveDrawer, toggleDrawerOpen } from 'material-ui-responsive-drawer'
import MenuItem from 'material-ui/MenuItem';
import { selectReddit } from '../actions'

const styles = {
  drawer_container: {
    height: '100%',
    backgroundColor: '#fafafa',
  },
  drawer_header: {
    margin: '0px',
    paddingBottom: '10px'
  },
  drawer_header_container: {
    padding: '10px'
  }
}

// スマホ時にカテゴリを閉じる+カテゴリ選択
function selectCtegory(category) {
  return dispatch => {
    dispatch(toggleDrawerOpen())
    dispatch(selectReddit(category))
  }
}

let Menu = ({ dispatch }) => {

  return (
    <ResponsiveDrawer>
      <div style={styles.drawer_container}>
        <div style={styles.drawer_header_container}>
          <h1 style={styles.drawer_header}>カテゴリ</h1>
          <MenuItem
            primaryText="IT・ガジェット" onTouchTap={() => dispatch(selectCtegory("its"))} />
          <MenuItem
            primaryText="ソーシャルゲーム" onTouchTap={() => dispatch(selectCtegory("socialgames"))} />
          <MenuItem
            primaryText="ニュース" onTouchTap={() => dispatch(selectCtegory("news"))} />
          <MenuItem
            primaryText="アニメ・ゲーム" onTouchTap={() => dispatch(selectCtegory("animegames"))} />
          <MenuItem
            primaryText="スポーツ" onTouchTap={() => dispatch(selectCtegory("sports"))} />
          <MenuItem
            primaryText="生活" onTouchTap={() => dispatch(selectCtegory("lives"))} />
          <MenuItem
            primaryText="芸能" onTouchTap={() => dispatch(selectCtegory("entertainers"))} />
          <MenuItem
            primaryText="Comming Soon..." onTouchTap={() => dispatch(selectCtegory("overseas"))} />
          <MenuItem
            primaryText="Comming Soon..." onTouchTap={() => dispatch(selectCtegory("new"))} />
          <MenuItem
            primaryText="Comming Soon..." onTouchTap={() => dispatch(selectCtegory("ranking"))} />
        </div>
      </div>
    </ResponsiveDrawer>
  )

}
Menu = connect()(Menu)

export default connect(
)(Menu);