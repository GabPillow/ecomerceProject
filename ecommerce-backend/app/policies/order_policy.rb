class OrderPolicy < ApplicationPolicy

  def show?
    user == record.user
  end

  def create?
    user == record.user
  end

  def update?
    user == record.user
  end

  def cart?
    user == record.user
  end

  def index?
    user == record.user
  end
end
