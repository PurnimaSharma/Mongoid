class UsersController < ApplicationController
	skip_before_filter  :verify_authenticity_token
	before_filter :user_params, only: [:create]
	def index
      users = User.all
      render :json => {:users => JSONAPI::Serializer.serialize(users, is_collection: true),status: 200 }
    end

    def create
    	user = User.new(user_params)
		if user.save
		  render :json => {user: JSONAPI::Serializer.serialize(user), :message => "User created successfully and Verification Code sent", :status => 200 }
        else
          render :json => {:message => "Sorry User not created", :status => 200 }
        end
    end
   
    def user_params
       params.permit(:fname, :lname, :email, :phone)
	end

  def delete
    debugger
  end

end
