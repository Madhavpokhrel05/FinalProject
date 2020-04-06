class CreateApplications < ActiveRecord::Migration[6.0]
  def change
    create_table :applications do |t|
      t.string :name
      t.string :description
      t.string :image

      t.timestamps
    end
  end
end