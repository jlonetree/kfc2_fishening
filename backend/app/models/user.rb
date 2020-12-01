class User < ApplicationRecord
    has_one :wishlist
    has_many :wishlistitems, through: :wishlist
    has_many :messages
    has_many :likes
    has_many :userchickens
    has_many :chickens, through: :userchickens

    has_secure_password 

    validates :name, uniqueness: { case_sensitive: false }
end
