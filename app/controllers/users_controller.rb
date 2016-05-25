class UsersController < ApplicationController
	skip_before_filter  :verify_authenticity_token
	before_filter :user_params, only: [:create]
	def index
    end

    def create
    	@user = User.create(user_params)
    end
   
    def user_params
		params.require(:user).permit(:fname, :lname, :age, :phone)
	end

end
