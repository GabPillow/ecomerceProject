class OrderItem < ApplicationRecord
  belongs_to :game
  belongs_to :order

  validates :game_id, uniqueness: { scope: :order_id, message: "This game is already in the command" }
end
