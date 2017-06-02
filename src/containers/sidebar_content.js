import React from 'react';
import { connect } from 'react-redux'
import MaterialTitlePanel from '../components/material_title_panel';
import { Link } from 'react-router-dom'
import MenuItem from 'material-ui/MenuItem';
import Developer from 'material-ui/svg-icons/device/developer-mode';
import { selectReddit } from '../actions'
import { ResponsiveDrawer, toggleDrawerOpen } from 'material-ui-responsive-drawer'

const styles = {
  sidebar: {
    width: 256,
    height: '100%',
  },
  sidebarLink: {
    display: 'block',
    color: '#757575',
    textDecoration: 'none',
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575',
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: 'white',
  },
};

// スマホ時にカテゴリを閉じる+カテゴリ選択
function selectCtegory(category) {
  return dispatch => {
    dispatch(toggleDrawerOpen())
    dispatch(selectReddit(category))
  }
}


let SidebarContent = ({ state, dispatch }) => {


  return (
    <ResponsiveDrawer>

      <MaterialTitlePanel title="Menu" style={styles.sidebar}>
        <div style={styles.content}>
          <MenuItem style={styles.sidebarLink}
            containerElement={<Link to="/"></Link>}
            primaryText="IT・ガジェット" onTouchTap={() => dispatch(selectCtegory("its"))} />
          <MenuItem style={styles.sidebarLink}
            containerElement={<Link to="/socialgames"></Link>}
            primaryText="ソーシャルゲーム" onTouchTap={() => dispatch(selectCtegory("socialgames"))} />
          <MenuItem style={styles.sidebarLink}
            containerElement={<Link to="/news"></Link>}
            primaryText="ニュース" onTouchTap={() => dispatch(selectCtegory("news"))} />
          <MenuItem style={styles.sidebarLink}
            containerElement={<Link to="/animegames"></Link>}
            primaryText="アニメ・ゲーム" onTouchTap={() => dispatch(selectCtegory("animegames"))} />
          <MenuItem style={styles.sidebarLink}
            containerElement={<Link to="/sports"></Link>}
            primaryText="スポーツ" onTouchTap={() => dispatch(selectCtegory("sports"))} />
          <MenuItem style={styles.sidebarLink}
            containerElement={<Link to="/lives"></Link>}
            primaryText="生活" onTouchTap={() => dispatch(selectCtegory("lives"))} />
          <MenuItem style={styles.sidebarLink}
            containerElement={<Link to="/entertainers"></Link>}
            primaryText="芸能" onTouchTap={() => dispatch(selectCtegory("entertainers"))} />
          {/*<MenuItem style={styles.sidebarLink}
          containerElement={<Link to="/overseas"></Link>}
          primaryText="海外" onTouchTap={() => dispatch(selectCtegory("overseas"))} />
        <MenuItem style={styles.sidebarLink}
          containerElement={<Link to="/new"></Link>}
          primaryText="新着" onTouchTap={() => dispatch(selectCtegory("new"))} />
        <MenuItem style={styles.sidebarLink}
          containerElement={<Link to="/ranking"></Link>}
          primaryText="ランキング" onTouchTap={() => dispatch(selectCtegory("ranking"))} />*/}

          <div style={styles.divider} />
          <MenuItem style={styles.sidebarLink} leftIcon={<Developer />}
            containerElement={<Link to="/under-development"></Link>}
            primaryText="開発予定" onTouchTap={() => dispatch(toggleDrawerOpen())} />

        </div>
      </MaterialTitlePanel>
    </ResponsiveDrawer>

  )
}


const mapStateToProps = (state, toggleOpen) => {
  return { state, toggleOpen }
}

const mapDispatchToProps = (dispatch) => {
  return { dispatch }
}

SidebarContent = connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarContent)

export default SidebarContent;