import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectReddit, fetchPostsIfNeeded } from '../actions'
import Posts from '../components/Posts'

class ItemList extends Component {
    static propTypes = {
    //selectedReddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  }
  componentDidMount() {
    const { dispatch, selectedReddit } = this.props
    dispatch(fetchPostsIfNeeded(selectedReddit))
  }

  render() {
    const {posts} = this.props
    const isEmpty = posts.length === 0
    return (
      <div>
          {isEmpty
            ? <h2>Loading...</h2>
            : <div>
              <Posts posts={posts} />
            </div>
          }
      </div>
    )
  }
}

//空でも良いので、mapStateToPropsを記述
const mapStateToProps = (state) => {
  const { items: posts } = (state.items)
  return {
    posts
  }
}

export default connect(mapStateToProps)(ItemList)