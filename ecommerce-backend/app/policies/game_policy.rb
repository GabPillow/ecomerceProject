class GamePolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all # Tout le monde peut voir tous les jeux
    end
  end

  def index?
    true # Tout le monde peut voir la liste des jeux
  end

  def show?
    true # Tout le monde peut voir un jeu
  end

  def search?
    true # Tout le monde peut voir un jeu
  end

  def create?
    user.admin? # Seuls les admins peuvent ajouter un jeu
  end

  def update?
    user.admin? # Seuls les admins peuvent modifier un jeu
  end

  def destroy?
    user.admin? # Seuls les admins peuvent supprimer un jeu
  end
end
