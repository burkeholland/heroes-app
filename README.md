# React CosmosDB

This is a demo project for the React CosmosDB video series that shows how to...

* Setup a React / Node application
* Create, Read, Update and Delete data from CosmosDB with the Mongo API
* Debug React and Node apps
* Scale and replicate CosmosDB

Follow along with the video series. React is a blast and CosmosDB is crazy fast. Building this app is way too much fun.

## Get Started

1. Clone this repository

```bash
git clone https://github.com/burkeholland/react-cosmosdb.git
```

2. Change into the directory that was cloned and run `npm install`

```bash
cd react-cosmosdb && npm install
```

3. Configure the CosmosDB Server Setting

Rename `server/env/environment-change-me.js` to `environment.js` and change the `cosmosPort`, `dbName` and `key` to match your CosmosDB environment.

```javascript
// server/env/environment.js
const cosmosPort = 1234; // replace with your port
const dbName = 'your-cosmos-db-name-goes-here';
const key = 'your-key-goes-here';

module.exports = {
  cosmosPort,
  dbName,
  key
};
```

## Run The App

To run the application in development, launch the React front end by running `npm start` from the main directory.

```bash
npm start
```

Launch the Express backend from a separate tab by running `npm start` in the `server` folder.

```bash
cd server
npm start
```



## Installing

```bash
git clone 'this-repo-url' app-name
cd app-name
npm install
```

## Running The App

The template can be run in development, or in production. For development, use the following workflow.

### Start the Express Server

```bash
node server/server.js
```

### Start Create React App

In a different terminal tab...

```bash
npm start
```

## Building For Production

In production, you want Express to serve up your app.

### Build React App

```bash
npm build
```

Now simply visit the Express app at 'http://localhost:3001' and you will see your app served from the 'server' folder. That's all there is to it!

Everything in the server folder is what is needed in production. Those are all of the build assets. 
