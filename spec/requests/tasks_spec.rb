require 'rails_helper'

RSpec.describe "Tasks", type: :request do
  
  let!(:user)do 
    User.where(email: 'test@test.test').first_or_create(password: '12345678', password_confirmation: '12345678')
  end
  
  let!(:task)do 
    user.tasks.create(
    title: 'Fangs',
    details: 'Remember to pick up gold grill from the jeweler',
  )
  end 
  
  
  describe "GET /index" do 
    it 'returns a list of all tasks' do 
      
      get '/tasks'
      response_task = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(response_task.length).to eq(1)
    end
  end

end
