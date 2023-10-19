![](https://user-images.githubusercontent.com/970858/63474771-d6734700-c469-11e9-83bb-9429da563909.png)

# Express | IMDB API

## Introduction

> ***Note:*** _This can be a pair programming activity or done independently._

## Learning Goals

After this learning unit, you will be able to:

- Create a REST API with Node and ExpressJS
- Connect your API with Mysql using Sequelize
- Consume the API using POSTMAN

## Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Clone this repo into your `~/code/labs`

## Deliverables

Please, push every file needed to make your app properly on GitHub before creating the pull request.

## Introduction

REST APIS are standard server architecture. They provide data to a front-end application and also allows third parties to access data if required. In today's lab we will simulate a server of a well known movie page: IMDB.

This API will provide data about movies and the registered users. 

## Setting up a new project

Once you fork this repo, remember to download and install all the dependencies 

```
$ npm i
```

## Users

The user endpoints will be already implemented but we will go through them. Pay attention and ask any questions if you have any doubt during the process. You should already have the following endpoints: 

- `/users`:
    -  [GET] Show all users in database
    -  [POST] Create a new user
- `/users/:id`:
    -  [GET] Show a user with the same ID in database
    -  [PUT] Update a user
    -  [DELETE] Delete a user

## Movies

### Iteration 0

First, create a database called IMDB in mySQL

Second, you will need to import movie and user cvs files into the tables 

Now you can check user endpoints to practice.

### Iteration 1 - Get Movies

Now you will create the movie model to match the data in the database, some routes and controllers.

Your first route will be to `get` all the movies from the DB in `movies/`!

### Iteration 2 - New Movie

The second route will allow your API client to **create a new movie**. For this you will need to use the `post` method!

After implementing it, you must try to add a new movie from POSTMAN.

### Iteration 3 - Movie Endpoints

Now let's work with a specific movie providing the id of the movie `movies/:id`

Create routes for:

  *  [GET] Show a movie with the same ID in database
  *  [PUT] Update a movie
  *  [DELETE] Delete a movie

### Iteration 4 - Filtering with Params

These REST API endpoints are quite basic so far:

- `/users`  [GET] Show all users in database
- `/movies` [GET] Show all movies in database

Let's make them more useful by admitting [query params](http://expressjs.com/en/5x/api.html#req.query) to filter the users displayed. If a user is not found or any query param introduced does not belong to an entity property, it should return an empty array:

```
$ localhost:8080/api/users?name="John"&company="Twitter"

> [] 
```

## BONUS - Ratings Info

Create an endpoint that returns some data about the ratings of a specific genre of movies. 

- The endpoint will be `/movies/ratings`
- Pass the genre as a query param
- Return an object with:
    - genre
    - average ratings
    - max rating
    - min rating

```
$ localhost:8080/api/movies/ratings?genre="action"
{
    "genre": "action",
    "average": 7.2,
    "max": 9.1,
    "min": 3.3
}
```

## Submission

Upon completion, run the following commands:

```
$ git add .
$ git commit -m "done"
$ git push origin main
```

Then create a Pull Request!!


![happy_coding](https://user-images.githubusercontent.com/970858/63899010-c23fc480-c9ea-11e9-84a2-542907e42362.png)
