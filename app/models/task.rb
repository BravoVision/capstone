class Task < ApplicationRecord
    belongs_to :user
    validates :title, :details, :user_id, presence: true
end
