require 'rails_helper'

RSpec.describe "Tasks", type: :request do
  describe "GET /index" do 
    it 'returns a list of all tasks' do 
      
      user = User.where(email: 'test@test.test').first_or_create(password: '12345678', password_confirmation: '12345678')

      user.tasks.create(
        title: 'Fangs',
        details: 'Remember to pick up gold grill from the jeweler',
      )
      get '/tasks'
      task = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(task.length).to eq(1)
    end
  end
end
