class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  acts_as_token_authenticatable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :email, uniqueness: true
  validates :username, uniqueness: true
  has_many :orders
  has_many :wishlist_items
  has_many :order_items, through: :orders

  def wishlist_games
    games.joins(:wishlist_items).distinct
  end

  def ordered_games
    orders.joins(:order_items).distinct.flat_map(&:games)
  end
end
