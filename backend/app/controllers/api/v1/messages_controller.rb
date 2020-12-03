class Api::V1::MessagesController < ApplicationController

  skip_before_action :authorized, only: [:index, :show, :create]

  def index
    @messages = Message.all

    render json: @messages, include: :user
  end

  def show
    @message = Message.find(params[:id])

    render json: @message, include: :user
  end

  def create
    @message = Message.create(message_params)

    if @message.valid?
      render json: @message
    else
      render json: { error: 'failed to create message' }, status: :not_acceptable
    end
  end

  def update
    @message = Message.find(params[:id])

    if @message.update(message_params)
      render json: @message
    else
      render json: @message.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @message = Message.find(params[:id])
    @message.destroy
    render json: @message
  end

  private

  def message_params
    params.require(:message).permit(:content, :user_id)
  end
end
