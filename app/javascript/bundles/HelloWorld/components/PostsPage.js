import React, {Component} from "react";
import PostsListingView from "./PostsListingView";

class PostsPage extends Component {


    render() {
        return (
            <div className="">
                <header className="">
                    <h1>Apollo Client spike solution</h1>
                </header>
                <PostsListingView/>
            </div>
        );
    }
}

export default PostsPage;
