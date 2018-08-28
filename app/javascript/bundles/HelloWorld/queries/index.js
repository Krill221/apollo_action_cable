import gql from "graphql-tag";

export const commentsQuery = gql`
    query CommentsForPost($postId: ID!) {
        comments (postId: $postId) {
            id
            body
        }
    }
`;

export const commentsSubscription = gql`
    subscription onCommentAddedSubscription($postId: ID!) {
        commentAdded (postId: $postId) {
            id
            body
        }
    }
`;

export const createComment = gql`
  mutation CreateCommentMutation($postId: ID!, $body: String!) {
    createCommentAsync(postId: $postId, body: $body) {
      process_id
    }
  }
`;

//------------------------------------------------------------------

export const createPost = gql`
  mutation CreatePostMutation($title: String!, $body: String!) {
    createPostAsync(title: $title, body: $body) {
      process_id
    }
  }
`;
export const postsQuery = gql`
    query retrievePostsQuery {
        posts {
            id
            title
            body
        }
    }
`;

export const postsSubscription = gql`
    subscription onPostAddedSubscription {
        postAdded {
            id
            title
            body
        }
    }
`;
