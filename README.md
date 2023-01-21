# Building a MongoDB Express API

Building a MongoDB Express API can be a straightforward process with the right tools and knowledge. Here are the steps to create a simple MongoDB Express API:

1. Install the required dependencies
    - Node.js and npm (Node Package Manager)
    - MongoDB
    - Express.js
    - Mongoose (Object Document Mapper)

2. Create a new directory for your project and navigate to it in the command line.

3. Initialize a new Node.js project by running `npm init` and filling in the required information.

4. Install the required packages by running the following command:
```sh
npm install express mongoose
```
```js
const express = require('express');
const mongoose = require('mongoose');
```

Connect to your MongoDB database by adding the following lines in the `app.js` file:

```js
mongoose.connect('mongodb://localhost/your_database_name', { useNewUrlParser: true });
```

Define your MongoDB schema and models by creating a new file called models.js. In this file, you can define your schema and models for the collections in your database

In the `app.js` file, import your models by adding the following line at the top of the file:
```js
const models = require('./models');
```

Create the routes for your API by creating a new file called routes.js. In this file, you can define the routes for your API and handle the CRUD operations for your collections.

In the `app.js` file, import your routes by adding the following line at the top of the file:
```js
const routes = require('./routes');
```

Use the imported routes in your Express application by adding the following line in the `app.js` file:
```js
app.use('/', routes);
```



