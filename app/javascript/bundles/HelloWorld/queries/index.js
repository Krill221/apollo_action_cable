import gql from "graphql-tag";

export const ADD_COMMENT = gql`
  mutation CreateCommentMutation($postId: ID!, $body: String!) {
    createCommentAsync(postId: $postId, body: $body) {
      process_id
    }
  }
`;

export const GET_COMMENTS = gql`
    query CommentsForPost($postId: ID!) {
        comments (postId: $postId) {
            id
            body
        }
    }
`;

export const COMMENTS_SUBSCRIPTION = gql`
    subscription onCommentAddedSubscription($postId: ID!) {
        commentAdded (postId: $postId) {
            id
            body
        }
    }
`;

//------------------------------------------------------------------

export const ADD_POST = gql`
  mutation CreatePostMutation($title: String!, $body: String!) {
    createPostAsync(title: $title, body: $body) {
      process_id
    }
  }
`;
export const UPDATE_POST = gql`
  mutation UpdatePostMutation($id: String!, $title: String!, $body: String!) {
    updatePostAsync(id: $id, title: $title, body: $body) {
      process_id
    }
  }
`;
export const GET_POSTS = gql`
    query retrievePostsQuery {
        posts {
            id
            title
            body
        }
    }
`;

export const ADD_POSTS_SUBSCRIPTION = gql`
    subscription onPostAddedSubscription {
        postAdded {
            id
            title
            body
        }
    }
`;

export const GET_POST = gql`
    query retrievePostQuery($id: ID!) {
        post(id: $id) {
            id
            title
            body
        }
    }
`;

export const UPDATE_POSTS_SUBSCRIPTION= gql`
    subscription onPostUpdatedSubscription($id: ID!) {
        postUpdated (id: $id) {
            id
            title
            body
        }
    }
`;
