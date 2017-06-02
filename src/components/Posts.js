import React from 'react'
import PropTypes from 'prop-types'
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';

const styles = {
  a_container: {
    textDecoration: 'none'
  }
}

const Posts = ({selectedReddit,posts}) => (

  <Paper zDepth={5}>
    <List>
      <Subheader>{selectedReddit}</Subheader>
      <Divider />
      {posts.map((post) =>
        <a href={post.url} style={styles.a_container}>
          <ListItem
            key={post.id}
            leftAvatar={<Avatar src={post.img} />}
            primaryText={post.title}
            secondaryText={post.site + " " + new Date(post.updated_at).toLocaleString()}
          />
        </a>
      )}
    </List>
  </Paper>

)

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  selectedReddit: PropTypes.string.isRequired,
}

export default Posts

// document.write of react
// <div dangerouslySetInnerHTML={{__html: post.data}} />