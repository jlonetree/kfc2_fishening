Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users
      post '/login', to: 'auth#create'
      delete '/logout', to: 'auth#destroy'
      get '/logged_in', to: 'application#logged_in?'
      get '/profile', to: 'users#profile'
      get '/user', to: 'users#get_user'
      resources :messages
      resources :items
      resources :likes
      resources :chickens
      resources :userchickens
      resources :wishlists
      resources :wishlistitems
    end
  end
end
