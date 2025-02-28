class WishlistItemPolicy < ApplicationPolicy

  def create?
    user == record.user
  end

  def index?
    user == record.user
  end

  def destroy?
    user == record.user
  end
end
