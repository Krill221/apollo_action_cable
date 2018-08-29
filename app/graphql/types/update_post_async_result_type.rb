# frozen_string_literal: true

Types::UpdatePostAsyncResultType = GraphQL::ObjectType.define do
  name 'UpdatePostAsyncResult'
  description 'A result object representing the update post async processing.'

  field :process_id, !types.String
end
