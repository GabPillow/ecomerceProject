class Api::V1::WishlistItemsController < Api::V1::BaseController
  acts_as_token_authentication_handler_for User
  after_action :verify_authorized

  def create
    game = Game.find(params[:game_id])

    wishlist_item = wishlist_item.wishlist_items.create!(game: game)

    authorize wishlist_item

    render json: { message: "Game added to wishlist_item", wishlist_item: wishlist_item }, status: :created

  rescue ActiveRecord::RecordNotFound
    render json: { error: "Game not found" }, status: :not_found
  end

  def index
    @wishlist_items = current_user.wishlist_items

    if @wishlist_items.empty?
      skip_authorization
      render json: { message: "None whishlist items" }, status: :not_found
    else
      @wishlist_items.each do |wishlist_item|
        authorize wishlist_item
      end
      render 'index'
    end
  end
end
