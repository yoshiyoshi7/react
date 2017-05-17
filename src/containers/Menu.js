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
            primaryText="IT・ガジェット" onTouchTap={() => dispatch(selectReddit("its"))}/>
          <MenuItem
            primaryText="ソーシャルゲーム" onTouchTap={() => dispatch(selectReddit("socialgames"))}/>
            <MenuItem
            primaryText="新着" onTouchTap={() => dispatch(selectReddit("new"))}/>
            <MenuItem
            primaryText="ランキング" onTouchTap={() => dispatch(selectReddit("ranking"))}/>
            <MenuItem
            primaryText="ニュース" onTouchTap={() => dispatch(selectReddit("news"))}/>
            <MenuItem
            primaryText="アニメ・ゲーム" onTouchTap={() => dispatch(selectReddit("anime"))}/>
            <MenuItem
            primaryText="スポーツ" onTouchTap={() => dispatch(selectReddit("sports"))}/>
            <MenuItem
            primaryText="海外" onTouchTap={() => dispatch(selectReddit("overseas"))}/>
            <MenuItem
            primaryText="生活" onTouchTap={() => dispatch(selectReddit("life"))}/>
            <MenuItem
            primaryText="芸能" onTouchTap={() => dispatch(selectReddit("geinou"))}/>
        </div>
      </div>
    </ResponsiveDrawer>
    )

}
Menu = connect()(Menu)

export default Menu