class CreateApartments < ActiveRecord::Migration[7.0]
  def change
    create_table :apartments do |t|
      t.string :street
      t.string :city
      t.string :state
      t.string :manager

      t.timestamps
    end
  end
end
