class User
  include Mongoid::Document

  has_many :clients

  field :fname,  type: String
  field :lname,  type: String
  field :email, type: String
  field :phone,   type: String
end
