class OrderItemPolicy < ApplicationPolicy
  def destroy?
    user == record.order.user
  end
end
