import React from 'react'
import PropTypes from 'prop-types'
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';

const Posts = ({ posts }) => (

  <Paper zDepth={5}>
    <List>
      <Subheader>Recent chats</Subheader>
      {posts.map((post) =>
        <ListItem key={post.id}>{post.title}</ListItem>
      )}
    </List>
    <Divider />
  </Paper>

)

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Posts
