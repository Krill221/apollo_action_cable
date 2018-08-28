Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end

  post "/graphql", to: "graphql#execute"


  mount ActionCable.server => '/subscriptions'
end
