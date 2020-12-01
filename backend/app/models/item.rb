class Item < ApplicationRecord
    has_many :wishlistitems
    has_many :wishlists, through: :wishlistitems
end
