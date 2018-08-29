
# frozen_string_literal: true

Types::SubscriptionType = GraphQL::ObjectType.define do
  name 'Subscription'

  field :postAdded, !Types::PostType, 'A post was added to the blog.'
  
  field :postUpdated do
    type !Types::PostType
    argument :id, !types.ID
    description 'A post was Updated in the blog.'
  end

  field :commentAdded do
    type !Types::CommentType
    argument :postId, !types.ID
    description 'A comment was added to a blog post.'
  end
end
