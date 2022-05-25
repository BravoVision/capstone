# README












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