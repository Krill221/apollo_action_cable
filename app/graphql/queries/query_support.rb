module Queries
  class QuerySupport

    MESS = "SYSTEM ERROR: method missing"

    def resolve; raise MESS; end

    def call(object, args, context)
      begin
        result = resolve(object, args, context)
      rescue GraphQL::ExecutionError => e
        result = e
      end
      result
    end

  end
end
