class CreateUserChickens < ActiveRecord::Migration[6.0]
  def change
    create_table :user_chickens do |t|
      t.integer :chicken_id
      t.integer :user_id

      t.timestamps
    end
  end
end
