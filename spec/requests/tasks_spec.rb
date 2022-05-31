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

  describe "POST /create" do
    it 'can create a new task' do
      user = User.where(email: 'test@test.test').first_or_create(password: '12345678', password_confirmation: '12345678')

      user.tasks.create(
        title: 'Fangs',
        details: 'Remember to pick up gold grill from the jeweler',
      )

      post '/tasks', params: task_params
      expect(response).to have_http_status(200)
      task = Task.first
      expect(task.title).to eq('Fangs')
      expect(task.details).to eq('Remember to pick up gold grill from the jeweler')
    end

    it "cannot create a task without a title" do
      task_params = {
        task: {
          details: 'Remember to pick up gold grill from the jeweler'
        }
      }
      post '/tasks', params: task_params

      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)
      expect(json['title']).to include "can't be blank"
    end

    it "cannot create a task without details" do
      task_params = {
        task: {
          title: 'Fangs'
        }
      }
      post '/tasks', params: task_params

      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)
      expect(json['details']).to include "can't be blank"
    end

  end


  
end
