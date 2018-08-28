import React, {Component} from "react";
import PropTypes from "prop-types";

class PostView extends Component {
    render() {
        const {post} = this.props;

        return (
            <div className="card-holder" key={post.id}>
                <div className="card">
                    <div className="card-header">
                        <h4>{post.title}</h4>
                    </div>
                    <div className="card-body">
                        <div className="">{post.body}</div>
                    </div>
                </div>
            </div>
        );
    }
}

PostView.propTypes = {
    post: PropTypes.object.isRequired
};

export default PostView;
