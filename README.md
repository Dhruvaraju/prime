# Prime-banc

[![Builds](https://github.com/Dhruvaraju/prime/actions/workflows/firebase-hosting-merge.yml/badge.svg)](https://github.com/Dhruvaraju/prime/actions/workflows/firebase-hosting-merge.yml)

- [Prime-banc](#prime-banc)
- [Prime](#prime)
  - [Installing Angular cli](#installing-angular-cli)
    - [Install Node js](#install-node-js)
    - [Install NVM (Optional)](#install-nvm-optional)
    - [Angular CLI](#angular-cli)
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
  - [App Hosting](#app-hosting)
  - [Services hosting Details](#services-hosting-details)
  - [Trello Board for UI construction](#trello-board-for-ui-construction)

# Prime

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.

## Installing Angular cli

### Install Node js

- Install node js available at https://nodejs.org/en/

### Install NVM (Optional)

> If you are planning to work on projects with different node versions, Install NVM

- NVM available at location: [NVM-Releases](https://github.com/coreybutler/nvm-windows/releases)

To install a particular version of node use the below command

```
nvm install <<version>>
```

To use a particular version of node

```
nvm use <<version>>
```

To list all the installed node versions

```
nvm list
```

### Angular CLI

A utility for bootstrapping angular project and generating code. To install angular cli in a machine run the following command in terminal after installing node.

```
npm install -g @angular/cli
```

CLI can be used for generating components, services and many more

```
//to generate component
ng generate component <<componentName>>
// To generate service
ng generate service <<service name>>
```

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
- example: `git stash save customer`

> stashing is also known as dirty folders save

## git stash list

- To see all the stashes available

## git stash apply

- To get the stash back
- example: `git stash apply stash{0}`

## git stash clear

- To delete the stashes available in stash list
- It is a non recoverable command

## git fetch --all

- To track the remote branches

## App Hosting

- At present app is hosted in firebase
- A continuos delivery is enabled with help of github actions
- App hosting url: [prime-banc](https://prime-banc.web.app/), [prime-banc](https://prime-banc.firebaseapp.com/)

## Services hosting Details

- Services source code available at [Trading-services](https://github.com/revathi/trading-services)
- Hosted at: https://ipotrading.herokuapp.com/

## Trello Board for UI construction

- https://trello.com/b/t9PT6XGw/pilot-fe-prime

#TODO how routing works
#TODO Usage of HttpClient and HttpClientModule
#fortesting
