class UserSerializer < ActiveModel::Serializer
  attributes :name, :email, :first_name, :last_name, :bio, :chicken_lover, :total_points, :messages, :id
end
