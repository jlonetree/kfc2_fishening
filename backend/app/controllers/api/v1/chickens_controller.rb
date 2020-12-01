class Api::V1::ChickensController < ApplicationController
  def index
    @chickens = Chicken.all
  end

  def show
    @chicken = Chicken.find(params[:id])
  end

  def new
    @chicken = Chicken.new
  end

  def edit
    @chicken = Chicken.find(params[:id])
  end

  def create
    @chicken = Chicken.new(chicken_params)

    if @chicken.save
      redirect_to @chicken
    else
      render "new"
    end
  end

  def update
    @chicken = Chicken.find(params[:id])

    if @chicken.update(chicken_params)
      redirect_to @chicken
    else
      render "edit"
    end
  end

  def destroy
    @chicken = Chicken.find(params[:id])
    @chicken.destroy

    redirect_to chickens_path
  end

  private

  def chicken_params
    params.require(:chicken).permit(:name, :img_url, :points)
  end
end
