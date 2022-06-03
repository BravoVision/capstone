require 'rails_helper'

RSpec.describe Task, type: :model do
  describe "Create task Validations" do

    it "must contain a title" do
        task = Task.create details: "Enjoys Blood"
        expect(task.errors[:title]).to_not be_empty
    end

    it "must contain details" do
        task = Task.create title: "Spike"
        expect(task.errors[:details]).to_not be_empty
    end

    it "must have a title between 5-25 characters" do
        task = Task.create title: "Nope", details: "Not going to do that today"
        expect(task.errors[:title]).to_not be_empty
        expect(task.errors[:title]).to be < 5
    end

    it "must have a title between 5-25 characters" do
        task = Task.create title: "Not doing that today or tomorrow or the next day", details: "Not going to do that today"
        expect(task.errors[:title]).to_not be_empty
        expect(task.errors[:title]).to be > 25 
    end

    it "must have details less than or equal to 200 characters" do
        task = Task.create title: "Spike", 
        details: "Hire the best idea shower. I don't want to drain the whole swamp, i just want to shoot some alligators crank this out but ping me gain alignment who's the goto on this job with the way forward . Circle back screw the pooch re-inventing the wheel pass the mayo, appeal to the client, sue the vice president horsehead offer, yet helicopter view. We've bootstrapped the model where do we stand on the latest client ask, but we don't need to boil the ocean here 60% to 30% is a lot of persent so rock Star/Ninja. Put in in a deck for our standup today due diligence, so can you champion this, are there any leftovers in the kitchen? "
        expect(task.errors[:details]).to_not be_empty
        expect(task.errors[:details]).to be > 200
    end

end
end 
