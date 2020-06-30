class ListsController < ApplicationController

    def index
        lists = List.all
        render json: ListSerializer.new(lists)
    end

    def create
        list = List.create(name: params[:name], starred: params[:starred])
        render json: ListSerializer.new(list)
    end

    def update
        list = List.find_by(id: params[:id])
        list.update(list_params)
        render json: ListSerializer.new(list)
    end

    def destroy
        listToDelete = List.find_by(id: params[:id])
        listToDelete.items.each { |item| item.delete }
        listToDelete.delete
        render json: listToDelete.to_json
    end

    private
    def list_params
        params.require(:list).permit(:id, :name, :starred)
    end

end
