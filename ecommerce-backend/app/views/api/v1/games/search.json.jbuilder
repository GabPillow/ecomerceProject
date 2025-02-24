json.array! @games do |game|
  json.extract! game, :id, :title, :image, :price
end
