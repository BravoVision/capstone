class TasksController < ApplicationController
    
    def index 
        render json: current_user.tasks
    end
    
    def create
        task = Task.create(task_params)
        if task.valid?
            render json: {task: task}
        else
            render json: {errors: task.errors}, status: 422
        end
    end

    def update
        task = Task.find(params[:id])
        task.update(task_params)

        if task.valid?
            render json: {task: task}
        else
            render json: {errors: task.errors}, status: 422
        end
    end

    def destroy
        task = Task.find(params[:id])
        tasks = Task.all
        
        if task.destroy
            render json: tasks
        else
            render json: tasks.errors
        end
    end

    private

    def task_params
        params.require(:task).permit(:title, :details, :user_id)
    end

end
