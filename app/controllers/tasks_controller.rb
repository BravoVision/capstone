class TasksController < ApplicationController
    
    def index 
        tasks = Task.all 
        render json: tasks
    end
    
    def create
        task = Task.create(task_params)
        if task.valid?
            render json: task
        else
            render json: task.errors, status: 422
        end
    end

    private

    def task_params
        params.require(:task).permit(:title, :details)
    end

end
