class UserSerializer 
	include JSONAPI::Serializer

  def attributes

    data = super 
    data[:id] = object._id
    data[:fname] = object.fname
    data[:lname] = object.lname
    data[:email] = object.email
    data[:phone] = object.phone
    data
  end
end
