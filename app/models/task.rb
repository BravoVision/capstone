class Task < ApplicationRecord
    
    belongs_to :user
    validates :title, :details, :user_id, presence: true
    validates :title, length: { in: 5..25 }
    validates :details, length: { maximum: 200, too_long: "%{count} characters is the maximum allowed"  }

end
