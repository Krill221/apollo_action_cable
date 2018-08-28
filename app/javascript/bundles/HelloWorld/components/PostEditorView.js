import React, {Component} from "react";
import {graphql} from 'react-apollo';
import {createPost} from '../queries';

const withCreatePostMutation = graphql(createPost);

class PostEditorView extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onChangeBodyInput = this.onChangeBodyInput.bind(this);
        this.onChangeTitleInput = this.onChangeTitleInput.bind(this);
        this.state = {title: '', body: ''};
    }

    onClick() {
        const options = {
            variables: {title: this.state.title, body: this.state.body}
        };
        this.props.mutate(options).then(({data}) => {
            this.setState({body: '', title: ''});
        }).catch((error) => {
            console.error('Error with create post mutation.', error);
        });
    }

    onChangeBodyInput(event) {
        this.setState({body: event.target.value})
    }

    onChangeTitleInput(event) {
        this.setState({title: event.target.value})
    }

    render() {
        return (
            <div className="card">
              <input type="text"
                value={this.state.title}
                onChange={this.onChangeTitleInput}
                placeholder="Post title"/><br />
              <textarea name="bodyInput"
                value={this.state.body}
                onChange={this.onChangeBodyInput}
                placeholder="Post body"/><br />
              <button className="btn btn-primary" onClick={this.onClick}> Save</button>
              <hr />
            </div>
        );
    }
}

export default withCreatePostMutation(PostEditorView);
