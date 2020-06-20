class ItemsController < ApplicationController

    def index
        items = Item.all
        render json: ItemSerializer.new(items)
    end

    def create
        list = List.find_by(id: params[:list_id])
        item = list.items.create(item_params)
        render json: ItemSerializer.new(item)
    end

    def update
        item = Item.find_by(id: params[:id])
        item.update(item_params)
        render json: ItemSerializer.new(item)
    end

    def destroy
        item = Item.find_by(id: params[:id])
        item.delete
        render json: ItemSerializer.new(item)
    end
    
    private
    def item_params
        params.require(:item).permit(:id, :name, :status, :priority, :due_date, :list_id)
    end

end
