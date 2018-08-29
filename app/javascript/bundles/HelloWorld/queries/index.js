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
export const GET_POSTS = gql`
    query retrievePostsQuery {
        posts {
            id
            title
            body
        }
    }
`;

export const POSTS_SUBSCRIPTION = gql`
    subscription onPostAddedSubscription {
        postAdded {
            id
            title
            body
        }
    }
`;
