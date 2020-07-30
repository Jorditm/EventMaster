# Event Master

## Description

Buscador de eventos a nivel global y guardar los eventos favoritos en una lista personal

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage and filter by type of restaurant, log in and sign up.
- **sign up** - As a user I want to sign up on the web page so that I can add favorite restaurants to my list.
- **login** - As a user I want to be able to log in on the web page so that I can get back to my account
- **logout** - As a user I want to be able to log out from the web page so that I can make sure no one will access my account
- **favorite list** - As a user I want to see the list of my favorite and delete them.
- **edit user** - As a user I want to be able to edit my profile.
- **result** - As a user I want to see the list of restaurant filter by my preferences.
- **restaurant listing** - As a user I want to see more details of the restaurant, be able to call them and visit their website and save it as favorites.

## MVP

![Captura de Pantalla 2020-07-30 a les 12.19.22](/https://github.com/Jorditm/EventMaster/blob/master/public/images/Captura%20de%20Pantalla%202020-07-30%20a%20les%2012.19.22.png)

## Server Routes (Back-end)

| **Method** | **Route**                     | **Description**                                              | Request - Body                                           |
| ---------- | ----------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| `GET`      | `/`                           | Main page route. Renders home `index` view.                  |                                                          |
| `GET`      | `/login`                      | Renders `login` form view.                                   |                                                          |
| `POST`     | `/login`                      | Sends Login form data to the server.                         | { email, password }                                      |
| `GET`      | `/signup`                     | Renders `signup` form view.                                  |                                                          |
| `POST`     | `/signup`                     | Sends Sign Up info to the server and creates user in the DB. | { email, password }                                      |
| `GET`      | `/private/edit-profile`       | Private route. Renders `edit-profile` form view.             |                                                          |
| `PUT`      | `/private/edit-profile`       | Private route. Sends edit-profile info to server and updates user in DB. | { email, password, [firstName], [lastName], [imageUrl] } |
| `GET`      | `/private/favorites`          | Private route. Render the `favorites` view.                  |                                                          |
| `POST`     | `/private/favorites/`         | Private route. Adds a new favorite for the current user.     | { name, cuisine, city, }                                 |
| `DELETE`   | `/private/favorites/:eventId` | Private route. Deletes the existing favorite from the current user. |                                                          |
| `GET`      | `/events`                     | Renders event-list` view.                                    |                                                          |
| `GET`      | `/events/details/:id`         |                                                              |                                                          |



## Models

User model

```
{
  name: String,
  email: String,
  password: String,
  favorites: [FavoriteId],
}
```

Favorites model

```
{
  eventId: String,
}
```

Events model

```
{
name: String,
image: String,
type: String,
description: String,
date: Date,
location: String,
url: String
}
```

## Links

### Trello

[Link to your trello board](https://trello.com/) or picture of your physical board

### Git

The url to your repository and to your deployed project

[Repository Link](http://github.com/)

[Deploy Link](http://heroku.com/)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com/)

