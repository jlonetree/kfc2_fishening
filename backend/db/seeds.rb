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
    {name: "KFC_4_Lyfe", password: "F!ngerL1ckenG00d", email: "ssegura@kfc.com", first_name: "Stephanie", last_name: "Segura", img_url: "https://icanmakeshoes.com/wp-content/uploads/2010/09/blank-profile-picture-600x600.png", bio: "I want that good good, all the chickens that is all I crave", chicken_lover: true, total_points: 3000},
    {name: "OG_Colonel", password: "chicken!", email: "csanders@kfc.com", first_name: "Colonel", last_name: "Sanders", img_url: "https://i1.wp.com/www.menuism.com/blog/wp-content/uploads/2015/10/Colonel-Sanders.jpeg?resize=500%2C453", bio: "At seventy four I sold, for the sum of two million dollars, my fried chicken business, which I’d started at the age of sixty five, when I was getting ready to live out my days on social security.", chicken_lover: true, total_points: 5000},
    {name: "Krispy_Colonel", password: "crispiest!", email: "krispycolonel@kfc.com", first_name: "Krispy", last_name: "Colonel", img_url: "https://s3-prod.adage.com/s3fs-public/KFC_ExtraCrispySunscreen16.jpg", bio: "Howdy folks, come on down to KFC and check out my new Golden Crispy Chicken", chicken_lover: true, total_points: 2000},
    {name: "Suave_Colonel", password: "suavest123", email: "suavecolonel@kfc.com", first_name: "Suave", last_name: "Colonel", img_url: "https://s3-prod.adage.com/s3fs-public/styles/800x600/public/20190409_KFCInfluencer_3x2_0.jpg", bio: "I was into chicken before chicken was cool", chicken_lover: true, total_points: 1000},
    {name: "Colonel_Kun", password: "animerocks7", email: "colonelsenpai@kfc.com", first_name: "Colonel", last_name: "Senpai", img_url: "https://i.insider.com/5d8bc1382e22af41a3414400?width=1136&format=jpeg", bio: "Chicken is the lifeblood of our society, they who know how to fry the chicken, rules the world", chicken_lover: true, total_points: 4500},
    {name: "MamaWasWrong", password: "Medulla1", email: "evilcolonel@kfc.com", first_name: "Evil", last_name: "Colonel", img_url: "https://images.squarespace-cdn.com/content/v1/576a19ba46c3c4a46ff5bb79/1522080813485-UPW5CNZNONXMBO3WUA00/ke17ZwdGBToddI8pDm48kMQ4wTzo2awNDr8kRNxSikhZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzryrumNFFjEciWSP2on4fHdbCALEbeHd5-On5eIGIabTxG9G4uY1mTW6dKpnkJITE/1c5tyr.jpg", bio: "Medulla Oblongata!!! Chicken is my enemy, only FISH!!!", chicken_lover: false, total_points: 0}
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
    {content: "Nothing is better than a nice heaping batch of fried chicken with a side of my famous mashed potatoes and gravy", user_id: 2},
    {content: "I know what you're thinking, how could we get any crispier, well we just did! ;)", user_id: 3},
    {content: "Fried chicken is cool, but have you ever thought about grilled chicken?", user_id: 4},
    {content: "I fry chicken for truth and justice, believe it!", user_id: 5},
    {content: "Let me tell you something Bobby Boucher, Mama's wrong!!!", user_id: 6}
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