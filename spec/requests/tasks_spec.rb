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


  describe "POST /create" do
    
    it 'creates a task' do
      task_params ={
        task: {
          title: 'bananas',
          details: 'do not forget to peel',
          user_id: user.id
        }
      }

      post "/tasks", params:task_params
      response_task = JSON.parse(response.body)
      p response_task

      expect(response).to have_http_status(200)
      expect(response_task["title"]).to eq(task_params[:task][:title])
      expect(response_task["details"]).to eq(task_params[:task][:details])
      expect(response_task["user_id"]).to eq(user.id)
    end

    it "doesn't create a task without a title" do
      task_params ={
        task: {
          details: 'do not forget to peel',
          user_id: user.id
        }
      }

      post '/tasks', params: task_params
      expect(response).to have_http_status (422)
      json = JSON.parse(response.body)
      expect(json['title']).to include "can't be blank"
    end

    it "doesn't create a task without details" do
      task_params ={
        task: {
          title: 'bananas',
          user_id: user.id
        }
      }

      post '/tasks', params: task_params
      expect(response).to have_http_status (422)
      json = JSON.parse(response.body)
      expect(json['details']).to include "can't be blank"
    end

  end


  describe "PATCH /update" do
    
    it 'updates a task' do
      
      task_params ={
        task: {
          title: 'bananas',
          details: 'do not forget to peel',
          user_id: user.id
        }
      }

      patch "/tasks/#{task.id}", params:task_params
      task = Task.first
      response_task = JSON.parse(response.body)

      expect(response).to have_http_status(200)
      expect(response_task["title"]).to eq(task_params[:task][:title])
      expect(response_task["details"]).to eq(task_params[:task][:details])
      expect(response_task["user_id"]).to eq(user.id)
    end

    it "doesn't update a task without a title" do
      task_params ={
        task: {
          details: 'do not forget to peel',
          user_id: user.id
        }
      }
      
      patch "/tasks/#{task.id}", params:task_params
      expect(response).to have_http_status (422)
      json = JSON.parse(response.body)
      expect(json['title']).to include "can't be blank"
    end

    it "doesn't update a task without details" do
      task_params ={
        task: {
          title: 'bananas',
          user_id: user.id
        }
      }
      patch "/tasks/#{task.id}", params:task_params
      expect(response).to have_http_status (422)
      json = JSON.parse(response.body)
      expect(json['details']).to include "can't be blank"
    end

  end


  describe "DELETE /destroy" do
    
    it 'can delete a task' do
      
      task_params ={
        task: {
          title: 'bananas',
          details: 'do not forget to peel',
          user_id: user.id
        }
      }


      post "/tasks", params:task_params
      response_task = JSON.parse(response.body)

      delete "/tasks/#{task.id}", params: task_params
      destroy_task = Task.find_by(id: task.id)
      expect(destroy_task).to be_nil
    end

  end
  
end
