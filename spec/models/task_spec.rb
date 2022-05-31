require 'rails_helper'

RSpec.describe Task, type: :model do
  describe "Create task Validations" do
    it "must contain a title" do
        task = Task.create details: 'Enjoys Blood'
        expect(task.errors[:title]).to_not be_empty
    end
    it "must contain details" do
        task = Task.create title: "Spike"
        expect(task.errors[:details]).to_not be_empty

    end
end
end 
