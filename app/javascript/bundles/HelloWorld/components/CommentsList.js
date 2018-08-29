import React, {Component} from "react";

export default class CommentsList extends Component {
  componentWillMount() {
    this.props.subscribeToNewItems();
  }
  render() {
        let {data} = this.props;
        return (
          <div>
            {data && data.loading && <div>Loading...</div>}
            {data && data.error && <div>Error {data.error}</div>}
            <ul>
              {data && data.comments && data.comments.map((comment) => (<li key={comment.id}>{comment.body}</li>))}
            </ul>
          </div>
        );
  }
}
