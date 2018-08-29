class UpdatePostJob < ApplicationJob
  queue_as :default

  def perform(id, title, body)

    post = Post.update(id, :title => title, :body => body)
    ApolloActionCableSchema.subscriptions.trigger('postUpdated', { id: post.id }, post)
  end
end
