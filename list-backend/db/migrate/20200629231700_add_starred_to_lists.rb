class AddStarredToLists < ActiveRecord::Migration[6.0]
  def change
    add_column :lists, :starred, :boolean
  end
end
