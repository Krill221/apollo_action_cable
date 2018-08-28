module Types
  class CommentType < Types::BaseObject
    field :body, String, null: true
    field :created_at, String, null: true
  end
end
