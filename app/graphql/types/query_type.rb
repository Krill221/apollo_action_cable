Types::QueryType = GraphQL::ObjectType.define do
  name 'Query'

  field :posts, !types[Types::PostType] do
    resolve Queries::RetrievePosts.new
  end

  field :post, Types::PostType do
    argument :id, !types.ID
    description "Find a Post by ID"
    resolve Queries::RetrievePost.new
  end

  field :comments, !types[Types::CommentType] do
    argument :postId, !types.ID
    resolve Queries::RetrieveComments.new
  end

end
