json.orders @orders do |order|
  json.extract! order, :id, :status, :created_at, :updated_at, :total_price

  json.order_items order.order_items do |order_item|
    json.extract! order_item, :id
    json.game_title order_item.game.title
    json.game_price order_item.game.price
    json.game_image order_item.game.image
  end
end
