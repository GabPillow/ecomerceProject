class Api::V1::OrderItemsController < Api::V1::BaseController
  acts_as_token_authentication_handler_for User
  after_action :verify_authorized

  def destroy
    order_item = current_user.order_items.find_by(id: params[:id])

    if order_item
      authorize order_item
      order = order_item.order
      order_item.destroy
      update_order_total(order)
      render json: { message: "Game removed from order" }, status: :ok
    else
      render json: { error: "order item not found" }, status: :not_found
    end
  end

  private

  def update_order_total(order)
    total_price = order.order_items.sum { |item| item.game.price }
    order.update!(total_price: total_price)
  end
end
