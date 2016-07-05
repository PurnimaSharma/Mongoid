class Client
  include Mongoid::Document

  belongs_to :user
  field :fname,  type: String
  field :lname,  type: String
end
