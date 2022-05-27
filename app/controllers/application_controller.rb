class ApplicationController < ActionController::Base
    
    def after_sign_in_path_for(resource)
        '/task_index'
    end

end
