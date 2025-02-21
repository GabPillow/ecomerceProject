json.order do
  json.extract! @order, :id, :status, :created_at, :updated_at

  json.order_items @order.order_items do |order_item|
    json.extract! order_item, :id, :quantity
    json.game_title order_item.game.title
  end
end
