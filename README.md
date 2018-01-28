# Travel Diary README

## Description
Travel Diary is a React application built for Flatiron School's fourth module in four days. The project is a built out version of an earlier Vanilla JS single page application by the same name, and is currently an MVP version with additional features to be build out. The application is a diary to document the trips a user has been on. The app features:

* Full CRUD functionality on a PostgreSQL Database, which is hosted on Heroku (https://travel-diary-backend.herokuapp.com... go to https://travel-diary-backend.herokuapp.com/api/trips to see json of all trips)
* Route developed using React Router
* Authorization and Authentication using bcrypt and jwt
* Semantic used for CSS and HTML styling

Users are able to create an account and create individual travel diary trip entries. Trip entries have validations requiring a name and dates, but can also include city/state/country, description, and tags for work, leisure, beach, friends, and/or family. Users have a stats page that displays how many trips have received certain tags.

There is one account with data seeded: username: paul password: paul 

Take a look on Github: https://pawlkris.github.io/travel-diary-react/

## Installation Instructions
In order to run the application, fork the repo or clone using the following:

git clone https://github.com/pawlkris/travel-diary-react.git

Navigate to the main directory on your local drive and run the following:

npm install && npm start

Then navigate to http://localhost:3000 and explore away!

