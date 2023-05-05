# What is this Repository?
This repository is used along with the [Pluralsight Angular Best Practices course](https://app.pluralsight.com/library/courses/best-practices-angular/table-of-contents). 

Note that as it is here, this repo contains a project with poor practices. As you work through the Angular Best Practices course you will refactor this project to use best practices.

# Whitebeards

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Chapter 2

L ocate code quickly
I dentify code at a glance
F lattest structure possible
T ry to be DRY

File Naming
Let's start with this courses TypeScript file. By the name of this file, I'd kind of expect that it would contain a list of courses or something. But if we take a look, it actually contains a component. There are actually two things wrong with this file name. First of all, this component is what displays our catalog page. So, when I click on this catalog link, it's the courses component that's displayed. So, this component would be better named catalog, but even catalog.ts is still a little vague. Other than it's in the components folder, there's nothing that indicates that this file contains a component. This will become even more important later because we're going to move this file out of this folder later in the course. So, let's rename it. We'll go ahead and name this catalog.component.ts. Now it's clear that this is our catalog component. This naming style, which consists of a descriptor followed by a period and then followed by its type, is a recommended practice according to the Angular Style Guide. So, we're going to start doing this everywhere in our app. In fact, we need to do this for this component's template and CSS too. So, this CSS file should be named catalog.component.css, so you can tell by looking at it that this file contains the styles for the catalog component.

Folder Structure
- Organize by Feature Areas
    Content related to the course catalog and content related to users.
- App wide features can be in the root 'app' directory


