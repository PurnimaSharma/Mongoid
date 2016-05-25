class User
  include Mongoid::Document

  field :fname,  type: String
  field :lname,  type: String
  field :email, type: String
  field :password,   type: String
end
