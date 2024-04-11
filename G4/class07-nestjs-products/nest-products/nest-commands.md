# Useful nest commands

1. `npm i -g @nestjs/cli` installs the nest cli app globally, we must install this to use nest
2. `nest -v` checks the version of nest installed, if it shows unknown command, installation of nest cli was a failure
3. `nest new <project-name>` creates a new nest project in the opened directory in the terminal
4. `rm -rf .git` to delete the .git folder created by the nest new command so that you can push the code to github
5. Use `-g` when creating a new nest project to avoid initializing a new repo ex: `nest new <project-name> -g`
6. Install `npm i class-validator class-transformer` to have validation when using the validation pipe
