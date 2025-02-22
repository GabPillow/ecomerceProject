json.wishlist @wishlist_items do |wishlist_item|
  json.extract! wishlist_item, :id, :created_at, :updated_at

  json.game do
    json.extract! wishlist_item.game, :id
    json.game_title wishlist_item.game.title
    json.game_price wishlist_item.game.price
    json.game_image wishlist_item.game.image
    json.game_release_date wishlist_item.game.release_date
    json.game_rating wishlist_item.game.rating
    json.game_price wishlist_item.game.price
  end
end

json.user do
  json.extract! current_user, :username
end
