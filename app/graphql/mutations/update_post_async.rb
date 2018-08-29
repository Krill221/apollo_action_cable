# frozen_string_literal: true

module Mutations
  class UpdatePostAsync < Mutations::MutationSupport

    def resolve(_object, args, _context)
      job = UpdatePostJob.new(args[:id], args[:title], args[:body]).enqueue
      OpenStruct.new(process_id: job.job_id)
    end
  end
end
