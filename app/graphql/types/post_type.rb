module Types
  class PostType < Types::BaseObject
    field :title, String, null: true
    field :body, String, null: true
    field :comments, [Types::CommentType], null: true
  end
end
