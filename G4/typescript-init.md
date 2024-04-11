# TypeScript Project Setup Guide

Follow these steps to initialize a basic TypeScript project:

## 1. Make a directory

Create a new directory for your project and navigate into it:

```bash
mkdir my-typescript-project
cd my-typescript-project
```

## 2. Initialize your Node.js project

Use `npm` to create a `package.json` file with default values:

```bash
npm init -y
```

## 3. Install TypeScript

Install TypeScript as a development dependency in your project:

```bash
npm install -D typescript
```

## 4. Initialize TypeScript

```bash
npm init typescript
```

## 5. Modify `tsconfig.json`

Change the `lib` array in `tsconfig.json` to include `"dom"`. Open `tsconfig.json` and find the `lib` section, it should look something like this:

```json
"lib": ["es2015", "dom"]
```

## 6. Setup Development Environment

Install `nodemon` as a development dependency to automatically restart the server when changes are detected:

```bash
npm install -D nodemon
```

Add these scripts to your `package.json` to compile TypeScript files and run the application:

```json
"scripts": {
  "build:watch": "tsc --watch",
  "dev": "nodemon dist/index.js"
}
```

These commands allow you to automatically compile your TypeScript files when they change (`build:watch`) and run your application using `nodemon` (`dev`).

You have now set up a basic TypeScript project with live reloading. You can start adding TypeScript files and writing code in your project directory.
