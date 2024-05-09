- If you do not have nest js installed use the command `npm i -g @nestjs/cli`
- To start a new nest project use `nest new <project-name> -g`
- To create all the files required for a new resource use the command `nest g resource <resource-name>` and then select `Y` when asked to create crud entrypoints
- To install the dependencies to use typeorm and postgres use the command `npm i typeorm @nestjs/typeorm pg`
- To install the class validator and class transformer packages used for validation use `npm i class-validator class-transformer`
- Don't forget to register an entity in the feature module where that entity is used
- Don't forget to add the global validation pipe in main.ts to have your validation working, by testing bad requests you will see if it's added or not
- ALWAYS TEST A NEGATIVE AND POSITIVE OUTCOME OF AN ENDPOINT

- Basic .env file

  ```
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=postgres
    DB_PASS=postgres
    DB_NAME=postgres

  ```
