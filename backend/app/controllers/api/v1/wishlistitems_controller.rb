class Api::V1::WishlistitemsController < ApplicationController
  def index
    @wishlistitems = WishlistItem.all
  end

  def show
    @wishlistitem = WishlistItem.find(params[:id])
  end

  def new
    @wishlistitem = WishlistItem.new
  end

  def edit
    @wishlistitem = WishlistItem.find(params[:id])
  end

  def create
    @wishlistitem = WishlistItem.new(wishlistitem_params)

    if @wishlistitem.save
      redirect_to @wishlistitem
    else
      render "new"
    end
  end

  def update
    @wishlistitem = WishlistItem.find(params[:id])

    if @wishlistitem.update(wishlistitem_params)
      redirect_to @wishlistitem
    else
      render "edit"
    end
  end

  def destroy
    @wishlistitem = WishlistItem.find(params[:id])
    @wishlistitem.destroy

    redirect_to wishlistitems_path
  end

  private

  def wishlistitem_params
    params.require(:wishlistitem).permit(:message_id, :user_id)
  end
end
