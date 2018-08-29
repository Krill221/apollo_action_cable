import React, {Component} from "react";
import PostView from "./PostView";


export default class PostsListingView extends Component {
  componentDidMount() {
    this.props.subscribeToNewPosts();
  }
  render() {
        let content = (<div>&nbsp;</div>);
        let {data} = this.props;
        return (
          <div>
            {data.loading && <div>Loading...</div>}
            {data.error && <div>Error {data.error}</div>}
            {data.posts && data.posts.map( post => (
               <PostView post={post} key={post.id.toString()} />
              ) )}
          </div>
        );
  }
}
