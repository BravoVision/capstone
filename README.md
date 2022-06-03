# "Eventually..." Web Application

## App Description

Why do today what you can put off until tomorrow?

Navigate over to “Eventually” and take a look at your new favorite web application 
that helps with creating a simple to-do list for your everyday needs. No need to 
feel overwhelmed about remembering to do research for that 12-page paper due in 
2 days, and no more forgetting to feed the dog (maybe?!).

Sign up for “Eventually”, add your tasks, update them as needed, check them 
off or delete them when you’re done… done being bothered with doing the things.

Come to the place that helps you keep track of life and handle things, eventually…



## Development Team

1. Project Manager -- Toni Shepherd

- Takes ownership on internal team communication. Oversees the project management board.
- Communication with the team about who is working on what.
- Guardian of the Trello board. Ensures developers are assigned to the card they are working on.
- Notifies the instructors and/or mentors of PRs when a card is moved to the PR swimlane.
- Keeps Slack active with updates and pins appropriate content.
        
2. Tech Lead -- Natalia Diaz

- Takes ownership over the code base and version control.
- Guardian of GitHub. Merges code when appropriate.
- Leads mentorship sessions for the team.
- Surfaces blockers to the class at the beginning of the day.

3. Product Manager -- Tameka Stevenson

- Takes ownership on the big-picture vision of the product. Ensures the product meets all requirements.
- Must have strong management skills to provide support to the team and keep team unblocked.
- Ensures the README contains appropriate information.
- Gives progress updates to the class at the end of the day.

4. Design Lead -- Zane Prunella

- Takes ownership over the look, color scheme, and branding of the project.
- Guardian of the wire frames. Oversees color schemes and implementation of branding.
- Ensures intuitive navigation and user experience.
- Explores styling libraries, responsive design, and accessibility features.
- Gives user status updates to the class at the end of the day.

## Tech Stack

<p float="left">
<img src="https://www.svgrepo.com/show/305835/canva.svg" alt="Canva logo" width="100px">
<img src="https://www.svgrepo.com/show/354259/react.svg" alt="React logo" width="100px">
<img src="https://www.svgrepo.com/show/354252/rails.svg" alt="Rails logo" width="100px">
<img src="https://raw.github.com/plataformatec/devise/master/devise.png" alt="Devise logo" width="100px">
<img src="https://www.svgrepo.com/show/354202/postman-icon.svg" alt="PostMan" width="100px"> 
<img src="https://www.svgrepo.com/show/349404/heroku.svg" alt="Heroku" width="100px">
</p>


## Unauthorized User Experience

- Home Page
- Navigation Functionality
- Sign In Link 
- Sign Up Link
- About Us Page

## Authorized User Experience

- Home Page
- Navigation Functionality
- Sign Out Link 
- About Us Page

**Create**

**Read**

**Update**

**Delete**










        - Task App

        Added repo to project
        Created branch protection

        ##Frontend Structure
        Added Reactstrap
        Added react-router-dom
        Added Header and Footer component
        Added pages with routes
        Styles Header, Footer, NotFound components


        ##Testing with Jest and Enzyme
        $ git checkout -b test-coverage Install enzyme $ yarn add -D enzyme react-test-renderer enzyme-adapter-react-16 $ yarn test

        As a developer, I have test coverage on my Header component.

Created a test file for Header, Footer, NotFound, Home
Added tests to above files and App.test.js


##RESTful Routes
For the data side of the app:

index (read / get) - all the tasks
show (read / get) - one task - needs an id as a param to show which task
create
update
delete
For the user side of the app:

new
edit

##Index
Updated our route to TaskIndex to be dynamic so we can pass props
Mapped over this.props.cats in TaskIndex to show all the tasks
Added testing for TaskIndex to TaskIndex.test.js


##Show
Updated route to be dynamic to TaskShow
Displayed content of cat on TaskShow page
Added testing for CatShow to TaskShow.test.js