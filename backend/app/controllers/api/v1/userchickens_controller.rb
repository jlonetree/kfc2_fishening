class Api::V1::UserchickensController < ApplicationController
  def index
    @userchickens = UserChicken.all
  end

  def show
    @userchicken = UserChicken.find(params[:id])
  end

  def new
    @userchicken = UserChicken.new
  end

  def edit
    @userchicken = UserChicken.find(params[:id])
  end

  def create
    @userchicken = UserChicken.new(userchicken_params)

    if @userchicken.save
      redirect_to @userchicken
    else
      render "new"
    end
  end

  def update
    @userchicken = UserChicken.find(params[:id])

    if @userchicken.update(userchicken_params)
      redirect_to @userchicken
    else
      render "edit"
    end
  end

  def destroy
    @userchicken = UserChicken.find(params[:id])
    @userchicken.destroy

    redirect_to userchickens_path
  end

  private

  def userchicken_params
    params.require(:userchicken).permit(:chicken_id, :user_id)
  end
end
