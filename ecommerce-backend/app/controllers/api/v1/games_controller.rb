class Api::V1::GamesController < Api::V1::BaseController
  after_action :verify_authorized, except: :index
  after_action :verify_policy_scoped, only: :index
  before_action :set_game, only: [ :show ]

  def index
    @games = policy_scope(Game)
  end

  def show
  end

  private

  def set_game
    @game = Game.find(params[:id])
    authorize @game  # For Pundit
  end

end
