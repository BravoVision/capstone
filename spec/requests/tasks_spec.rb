require 'rails_helper'

RSpec.describe "Tasks", type: :request do
  include Devise::Test::IntegrationHelpers



  let!(:user)do 
    User.where(email: 'test@test.test').first_or_create(password: '12345678', password_confirmation: '12345678')
  end

  let!(:other_user)do 
    User.create(email: 'test2@test.test', password: '87654321', password_confirmation: '87654321')
  end
  
  let!(:task)do 
    user.tasks.create(
    title: 'Fangs',
    details: 'Remember to pick up gold grill from the jeweler',
  )
  end 

  let!(:other_task)do 
    other_user.tasks.create(
    title: 'Costume Shopping',
    details: 'Remember to pick up the bunny suit from Hot Topic',
  )
  end 
  
  
  describe "GET /index" do 
    it 'returns a list of all tasks' do 
      sign_in(user)
      get '/tasks'
      response_task = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(response_task.length).to eq(1)
    end
  end

end
