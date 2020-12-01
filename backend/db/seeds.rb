# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
UserChicken.delete_all
Chicken.delete_all
Like.delete_all
Message.delete_all
Wishlist.delete_all
WishlistItem.delete_all
Item.delete_all

users = [
    {name: "KFC_4_Lyfe", password: "F!ngerL1ckenG00d", email: "ssegura@kfc.com", first_name: "Stephanie", last_name: "Segura", bio: "I want that good good, all the chickens that is all I crave", chicken_lover: false, total_points: 3000},
    {name: "tester", password: "testing1", email: "test@test.com", first_name: "Test", last_name: "Tester", bio: "Hi I am just a test, a big ol' test", chicken_lover: true, total_points: 1000},
]

users.each {| user | User.create(user)}

user_chickens = [
    {chicken_id: 1, user_id: 1}
]

user_chickens.each {| user_chicken | UserChicken.create(user_chicken)}

chickens = [
    {name: "Robbie Rooster", img_url: "https://icon2.cleanpng.com/20180429/azq/kisspng-i-ching-feng-shui-golden-rooster-awards-china-5ae62fcaa529c7.7331786015250349546765.jpg", points: 500},
    {name: "Chickie Chicka", img_url: "https://toppng.com/uploads/preview/chicken-png-11552935198dsoiszp0wq.png", points: 400},
    {name: "Chicken Little", img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfAfEXvyEB7KjYgoszNmn3MXfeAuTbr8_ZZw&usqp=CAU", points: 300},
    {name: "Carol", img_url: "https://www.clipartmax.com/png/middle/6-60257_chicken-cliparts-chicken-clipart.png", points: 200},
    {name: "Fried", img_url: "https://toppng.com/uploads/preview/fried-chicken-png-11552935435yvdjpl9iyo.png", points: 100}
]

chickens.each { | chicken | Chicken.create{chicken}}

likes = [
    {message_id: 1, user_id: 1}
]

likes.each { | like | Like.create(like)}

messages = [
    {content: "Today, I got to eat all the chicken, and tomorrow I'm going to eat even more", user_id: 1},
    {content: "This is a test message, please delete me!", user_id: 2},
    {content: "Just please delete me!", user_id: 1}
]

messages.each { | message | Message.create(message)}

wishlists = [
    {user_id: 1, amount: 3}
]

wishlists.each { | wishlist | Wishlist.create(wishlist)}

wishlistitems = [
    {wishlist_id: 1, item_id: 1}
]

wishlistitems.each { | wishlistitem | WishlistItem.create(wishlistitem)}

items = [
    {name: "2 piece meal"},
    {name: "3 piece meal"},
    {name: "3 piece strips"},
    {name: "4 piece strips"},
    {name: "8 piece meal"},
    {name: "10 piece meal"},
    {name: "12 piece meal"},
    {name: "16 piece meal"},
    {name: "sm popcorn chicken"},
    {name: "lg popcorn chicken"}
]

items.each{ | item | Item.create(item) }