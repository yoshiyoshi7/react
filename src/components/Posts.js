import React from 'react'
import PropTypes from 'prop-types'
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';

const Posts = ({ posts }) => (

  <Paper zDepth={5}>
    <List>
      <Subheader>Recent chats</Subheader>
      <Divider />
      {posts.map((post) =>
        <ListItem key={post.title} leftAvatar={<Avatar src={post.img} />} primaryText={post.title} />
      )}
    </List>
  </Paper>

)

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Posts
