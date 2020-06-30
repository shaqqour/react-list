class ListSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :starred, :items
  #has_many :items
end
