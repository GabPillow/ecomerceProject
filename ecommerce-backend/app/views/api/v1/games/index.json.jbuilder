json.array! @games do |game|
  json.extract! game, :id, :title, :publisher, :description, :image, :price, :rating, :release_date, :developer
end
