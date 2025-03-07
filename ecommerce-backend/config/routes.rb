Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :games, only: [:index, :show] do
        get 'search', on: :collection
      end
      resources :wishlist_items, only: [:index, :create, :destroy]
      resources :order_items, only: [:destroy]
      resources :orders, only: [:index, :show, :create, :update] do
        get 'cart', on: :collection
      end
    end
  end
end
