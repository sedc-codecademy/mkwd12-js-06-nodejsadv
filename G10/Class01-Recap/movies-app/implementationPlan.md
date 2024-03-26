Application plan

MOVIES APP

- DB

  - movies.json
  - users.json

- src

  - node_modules

  - services

    - data.service.js (filesystem write/read operations)
    - jwt.srevice.js (jsonwebtoken utility class)

  - utils

    - utils.js (utility functions)

  - models

    - movie.model.js
    - auth.model.js

  - controllers

    - movie.controller.js
    - auth.controller.js

  - routes

    - movie.routes.js
    - auth.routes.js
    - index.js (the main router)

  - middleware

    - auth.middleware.js (validate auth token to allow access to the users to movie routes)
    - movie.validator.js (validate movie properties on movie creation)
    - movie.middelware.js (validate users role to let only admin users to delete movies)

  - entities
    - movie.entity.js

  * .env (config file)

  * package.json

  * package-lock.json

  * app.js (starting point of the app)

MAIN OBJECTIVES

- build project structure (scaffold)
- implement movie router
- implement auth
- add middleware
- test routes
