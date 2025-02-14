class CreateGames < ActiveRecord::Migration[7.1]
  def change
    create_table :games do |t|
      t.string :title
      t.string :publisher
      t.string :developer
      t.string :image
      t.text :description
      t.decimal :price
      t.integer :rating
      t.date :release_date

      t.timestamps
    end
  end
end
