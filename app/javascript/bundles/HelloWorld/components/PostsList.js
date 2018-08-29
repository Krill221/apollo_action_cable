import React, {Component} from "react";
import PostSubscription from "./PostSubscription0";


export default class PostsList extends Component {
  componentWillMount() {
    this.props.subscribeToNewItems();
  }
  render() {
        let {data} = this.props;
        return (
          <div>
            {data.loading && <div>Loading...</div>}
            {data.error && <div>Error {data.error}</div>}
            {data.posts && data.posts.map( post => (
               <PostSubscription post={post} key={post.id.toString()} />
              ) )}
          </div>
        );
  }
}
