class Order < ApplicationRecord
  belongs_to :user
  validates :status, inclusion: { in: ['bought', 'ongoing'], message: "%{value} is not a valid status" }
  validates :total_price, numericality: { greater_than_or_equal_to: 0 }
  has_many :order_items
end
