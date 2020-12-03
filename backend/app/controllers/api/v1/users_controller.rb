class Api::V1::UsersController < ApplicationController

  skip_before_action :authorized, only: [:index, :show, :create]

  def index
    @users = User.all
    
    render json: @users, include: :messages
  end

  def get_user
    user = self.current_user

    render json: user, include: :messages
  end

  def show
    @user = User.find(params[:id])

    render json: @user, include: :messages
  end

  def create
    @user = User.create(user_params)

    if @user.valid?
      render json: { user: @user }, status: :created
    else
      render json: { error: 'failed to create user' }, status: :not_acceptable
    end
  end

  def update
    @user = User.find(params[:id])

    if @user
      @user.update(user_params)
      render json: { user: @user }, status: :created
    else
      render json: { error: 'failed to create user' }, status: :not_acceptable
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    render json: @user
  end

  private

  def user_params
    params.require(:user).permit(:name, :password, :email, :first_name, :last_name, :img_url, :bio, :chicken_lover, :total_points)
  end

end
