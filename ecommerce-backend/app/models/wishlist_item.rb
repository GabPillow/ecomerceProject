class WishlistItem < ApplicationRecord
  belongs_to :user
  belongs_to :game
  validates :user_id, uniqueness: { scope: :game_id, message: "has already added this game to their wishlist" }
end
