- [Prime](#prime)
  - [Development server](#development-server)
  - [Code scaffolding](#code-scaffolding)
  - [Build](#build)
  - [Running unit tests](#running-unit-tests)
  - [Running end-to-end tests](#running-end-to-end-tests)
  - [Further help](#further-help)
  - [Starting up project locally check list](#starting-up-project-locally-check-list)
  - [Adding bootstrap to project](#adding-bootstrap-to-project)
  - [git help](#git-help)
  - [git stash](#git-stash)
  - [git stash list](#git-stash-list)
  - [git stash apply](#git-stash-apply)
  - [git stash clear](#git-stash-clear)
  - [git fetch --all](#git-fetch---all)

# Prime

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

> We can also use `npm start` to start development server

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Starting up project locally check list

- clone repository
- navigate to folder
- run npm install
- run `ng serve` or `npm start` , app will be running on port 4200 (http://localhost:4200)

## Adding bootstrap to project

- `npm install bootstrap` to add boot strap to project
- `npm install jquery` to install jquery to project.

Add the below entries to angular.json

```
node_modules/bootstrap/dist/css/bootstrap.css in the projects->architect->build->styles array,
node_modules/bootstrap/dist/js/bootstrap.js in the projects->architect->build->scripts array,
node_modules/bootstrap/dist/js/bootstrap.js in the projects->architect->build->scripts array,
```

## git help

- To verify a branch command is `git branch`

## git stash

- To save the current version of your git project
- command used to do it `git stash save <<stash-name>>`
- example: ```git stash save customer```

> stashing is also known as dirty folders save

## git stash list

- To see all the stashes available

## git stash apply
- To get the stash back
- example: ```git stash apply stash{0}``` 

## git stash clear
- To delete the stashes available in stash list
- It is a non recoverable command
  
## git fetch --all
- To track the remote branches

> Test to initiate a build

