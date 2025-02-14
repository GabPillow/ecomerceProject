class Api::V1::GamesController < Api::V1::BaseController
  def index
    @games = policy_scope(Game)
  end
end
