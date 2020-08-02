

# Event Master

## Description

Buscador de eventos a nivel global y guardar los eventos favoritos en una lista personal

## User Stories

- **error 400 ** - Como usuario, quiero ver una bonita página 404 cuando voy a una página que no existe para que sepa que fue mi culpa
- **error 500** - Como usuario, quiero ver una buena página de error cuando el súper equipo la arruina para que sepa que no es mi culpa
- **página de inicio** - Como usuario quiero poder acceder a la página de inicio tener una barra de búsqueda de eventos, un slider horizontal de eventos y una previsualización de 5 eventos
- **registrarse** - Como usuario, quiero registrarme en la página web para poder agregar eventos favoritos a mi lista.
- **iniciar sesión** - Como usuario quiero poder iniciar sesión en la página web para poder volver a mi cuenta.
- **cerrar sesión** - Como usuario quiero poder cerrar sesión desde la página web para asegurarme de que nadie acceda a mi cuenta
- **lista de favoritos** - Como usuario, quiero ver la lista de mis favoritos y eliminarlos.
- **editar usuario** - Como usuario quiero poder editar mi perfil.
- **resultado** - Como usuario, quiero ver la lista de eventos según mis búsquedas.
- **listado de eventos** - Como usuario quiero ver más detalles del restaurante, poder ver los detalles, ir a la web para comprar entradas y guardarlo como favorito.

## MVP

![Captura de Pantalla 2020-07-30 a les 12.19.22](https://github.com/Jorditm/EventMaster/blob/master/public/images/Captura%20de%20Pantalla%202020-07-30%20a%20les%2012.19.22.png)

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

## API

[API Link](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/)

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

FavoriteEvent model

```
{
name: String,
image: String,
type: String,
description: String,
date: Date,
location: String,
url: String,
ema.Types.ObjectId, ref: 'User' },
}
```

## Links

### Trello

[Link to your trello board](https://trello.com/b/zYVzZRBD/eventmaster) 

### Git

[Repository Link](https://github.com/Jorditm/EventMaster)

### Slides

