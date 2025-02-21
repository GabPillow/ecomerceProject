class Api::V1::OrdersController < Api::V1::BaseController
  acts_as_token_authentication_handler_for User
  before_action :set_orders, only: [ :show, :update ]

  def create
    game = Game.find(params[:game_id])
    order = current_user.orders.find_by(status: "ongoing")
    authorize @order
    unless order
      order = current_user.orders.create!(status: "ongoing")
    end

    order_item = order.order_items.find_by(game: game)

    if order_item.nil?
      order_item = order.order_items.create!(game: game)
    end

    update_order_total(order, order_item)

    render json: { message: "Game added to order", order: order }, status: :created

  rescue ActiveRecord::RecordNotFound
    render json: { error: "Game not found" }, status: :not_found
  end

  def show
    @order = current_user.orders.find_by(status: "ongoing")
    authorize @order
  end

  private

  def order_params
    params.require(:order).permit(:status)
  end

  def update_order_total(order, order_item)
    total_price = order.order_items.sum { |item| item.game.price }
    order.update!(total_price: total_price)
  end

  def render_error
    render json: { errors: @order.errors.full_messages },
      status: :unprocessable_entity
  end
end
