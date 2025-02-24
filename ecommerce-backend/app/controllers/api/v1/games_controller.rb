class Api::V1::GamesController < Api::V1::BaseController
  after_action :verify_authorized, except: [:index, :search]
  after_action :verify_policy_scoped, only: [:index, :search]
  before_action :set_game, only: [ :show ]

  def index
    @games = policy_scope(Game)
  end

  def show
  end

  def search
    @games = policy_scope(Game).where("title ILIKE ?", "%#{params[:query]}%")
    authorize @games
  end

  private

  def set_game
    @game = Game.find(params[:id])
    authorize @game  # For Pundit
  end

end
