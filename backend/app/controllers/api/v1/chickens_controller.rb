class Api::V1::ChickensController < ApplicationController
  
  skip_before_action :authorized, only: [:index, :show]

  def index
    @chickens = Chicken.all

    render json: @chickens
  end

  def show
    @chicken = Chicken.find(params[:id])

    render json: @chicken
  end

  def update
    @chicken = Chicken.find(params[:id])

    if @chicken.update(message_params)
      render json: @chicken
    else
      render json: @chicken.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @chicken = Chicken.find(params[:id])
    @chicken.destroy
    render json: @chicken
  end

  private

  def chicken_params
    params.require(:chicken).permit(:name, :img_url, :points)
  end
end
