const express = require('express');
const knex = require('knex');
const cors = require('cors');
const dotenv = require('dotenv');


// Config ENV 
dotenv.config()

const app = express();
app.use(cors());


// Config DB connection
const db = knex({
    client: 'pg',
    connection: {
        host: process.env.HOSTNAME,
        user: process.env.USERNAMEPG,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
    }
});


app.listen(3001, process.env.URL, () => {
    console.log('>> App is running');
})