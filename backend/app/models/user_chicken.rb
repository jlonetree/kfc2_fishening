class UserChicken < ApplicationRecord
    has_many :chickens
    belongs_to :user
end
