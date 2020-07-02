# REACT/Redux Portfolio Project
## To-Do, Doing, Done List

Easy simple way to orgenize your to-do lists.

## Introduction
To-Do, Doing, Done is a Single Page Application(SPA). It is written in Javascript, using React and Redux libraries. It is also using Ruby-Rails as a backend, and has a sqlite3 DB. This application was created to help people who are struggling to orgenize their To-Do lists. It is an easy simple way to create lists and add tasks and items to each one.
It is an open web application where users can create "To Do Lists" whether it is Personal, Work, or anything else. They can add tasks or items to the "to-do list." Each task/item has three stages: to-do, doing and done. The user can organize them by moving indiviual task/item from the to-do stage to the doing and then to the done stage. In addition, users can star individule lists and click the Starred tap to view only those lists. A search option is provided to search for a specific list if you star having many lists and get lost between them.

## Getting Started

Fork this repo and clone it to your local machine. Run rails server on the back-end folder of this project and then open "index.html" file in your browser and start creating list and add tasks to them.

### Technologies
[Ruby on Rails v6](https://rubyonrails.org/)

[SQLite3](https://www.sqlite.org/index.html)

[Javascript ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[React JS Library](https://reactjs.org/)

[REDUX State Container](https://redux.js.org/)

ruby '2.5.1' and the gem 'rails', '~> 6.0.2', '>= 6.0.2.1' as the backend.

gem 'sqlite3', '~> 1.4' as the database for Active Record

gem 'puma', '~> 4.1' as the app server

gem 'fast_jsonapi' for the controllers to render json-api

gem 'rack-cors' to handle cross-origin-resource-sharing

gem 'byebug' for development and testing

"@material-ui/core": "^4.10.2"

"@material-ui/icons": "^4.9.1"

"react": "^16.13.1"

"react-dom": "^16.13.1"

"react-redux": "^7.2.0"

"react-router-dom": "^5.2.0"

"react-scripts": "3.4.1"

"redux": "^4.0.5"

"redux-thunk": "^2.3.0"


### Installing
1) Install ruby 2.5.1 and add the required gems.
2) Run 'bundle install' in your terminal to install all the required gems.
3) Navigate to the backend folder and run 'rails s' to start your server.
4) Navigate to the frontend folder and run 'npm install' to install all React-JS dependencies.
5) In your frontend folder run 'npm start' or 'yarn start' to fire-up your browser.

## Authors

* **Shaqqour** - *Initial work* - [shaqqour](https://github.com/shaqqour)

## Acknowledgments

* Thanks to FlatIron school for providing all the resources that is needed to build this project.
* Special thanks to my cohort lead, Dalia Sawaya, who was there to answer any questions.
* Background was taking from https://unsplash.com/s/photos/lukas-blazek