# How to...

## Create a Database in Mongo DB?

1. Go to mongodb.com
2. Log in (if you don't have an account already, create one using the `Sign Up` button and choosing Google.)
3. Click on `Browse Collections` within the Cluster0 tile\*
4. Collections tab will be opened, and you should see `+ Create Database` within the left sidebar
5. Add database name
6. Add collection name
7. Click `Create`
8. Celebrate!

## Connect to a Mongo DB Database?

1. Go to mongodb.com
2. Log in
3. Click on `Connect` within the Cluster0 tile\*
4. Click on `Connect your application`
5. Copy the connection string to your app
6. Change the password
7. Celebrate!

- If you are not seeing this tile, you will need the create a Cluster first

## Add a new user to a Cluster within Mongo DB

1. Go to mongodb.com
2. Log in
3. Click on `Add new database user`
4. Choose `password`
5. Add username and password - DO NOT USE the following characters `: / ? # [ ] @`
6. Click add user
7. Celebrate!

## Create a NestJS Project
1. Install NestJS CLI by running `npm i -g @nestjs/cli`
2. Create a new project by running `nest new <project-name>`
3. Change directory into the project by running `cd <project-name>`
4. Run `npm run start:dev` to start the project in development mode
5. Celebrate!

## Use NestJS/cli
1. Make sure you have finnished everything listed from `Create a NestJS Project` point
2. Use command: `nest generate module <module name>` to generate a module
3. Use command: `nest generate controller <controller name> --no-spec` to generate a controller without spec file
4. Use command: `nest generate service <service name> --no-spec` to generate a service without spec file
5. Celebrate!

## Use class-validator
- run `npm i --save class-validator class-transformer`
- More info in docs available on: https://docs.nestjs.com/techniques/validation

## Use swagger
- run `npm install --save @nestjs/swagger`
- More info in docs availbale on: https://docs.nestjs.com/openapi/introduction

## Use Logger
- run `npm i nestjs-pino pino-http`
- More info in docs availbale on: https://www.npmjs.com/package/nestjs-pino

## Install & use PstgreSQL
1. Download PostgreSQL from https://www.postgresql.org/download/ -> Choose OS -> Click on `Download the installer`
2. Downloiad PG Admin from https://www.pgadmin.org/download/ -> Choose OS -> Click on `pgAdmin <latest_version>`
3. Install PostgreSQL, set `postgres` as password, click next on everything untill done
4. Install PG Admin, click next on everything untill done
5. Open PG Admin, go to `Servers` -> `PostreSQL <latest_version>` -> `Databases` -> right click `create` choose `Database`, set name and click `save`
6. To see the data in the DB, go to `Schemas` -> `public` -> `tables` -> right click on any table `View` -> `All rows`

## How to create a Nest JS app without .git

1. in terminal: nest new <name_of_the_app> -g
2. Celebrate!

## How to remove .git from a new Nest js app

1. in terminal: cd <name_of_the_new_app_folder>
2. in terminal: rm -rf .git
3. Celebrate!
