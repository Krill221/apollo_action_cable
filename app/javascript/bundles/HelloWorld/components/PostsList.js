import React, {Component} from "react";
import Post from "./Post";


export default class PostsList extends Component {
  componentDidMount() {
    this.props.subscribeToNewItems();
  }
  render() {
        let {data} = this.props;
        return (
          <div>
            {data.loading && <div>Loading...</div>}
            {data.error && <div>Error {data.error}</div>}
            {data.posts && data.posts.map( post => (
               <Post post={post} key={post.id.toString()} />
              ) )}
          </div>
        );
  }
}
