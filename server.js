const express = require('express');
const knex = require('knex');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');


// Config ENV 
dotenv.config()

const app = express();
app.use(express.json())
app.use(cors());

// Register and Sign in
const register = require('./controllers/register');
const signin = require('./controllers/signin');

//middleware
const validinfo = require('./middlewares/validinfo');
const authorization = require('./middlewares/authorization');

// Routes
const postEnglish = require('./routes/post');
const getEnglish = require('./routes/gets');
const deleteEnglish = require('./routes/delete');
const updateEnglish = require('./routes/update');

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

app.post('/newenglish', (req, res) => {
    postEnglish.addContentEnglish(req, res, db);
});

app.get('/allenglish', (req, res) => {
    getEnglish.showEnglishContent(req, res, db);
})

app.delete('/delenglish/:content_id', (req, res) => {
    deleteEnglish.deleteEnglish(req, res, db);
})

app.put('/updateenglish/:content_id', (req, res) => {
    updateEnglish.updateEnglish(req, res, db);
});


app.post('/register', validinfo, async (req, res) => {

    const { email } = req.body;
    try {
        const userExist = await db.select('email').from('login').where({ email: email })

        if (userExist.length > 0) {
            return res.json({ response: "User already exist" })
        }
        register.handleRegister(req, res, db, bcrypt)

    } catch (error) {
        console.error(error.message);
        res.status(400).json({ response: "error" })

    }
})

app.post('/signin', validinfo, signin.handleSignin(db, bcrypt))

app.get('/isverify', authorization, (req, res) => {
    try {
        res.json(true)
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ response: "Server Error" })
    }
})

app.get('/data', authorization, async (req, res) => {
    try {
        const user = await db.select('id', 'name', 'picture').from('users').where({ id: req.user })
        // console.log(user);
        res.json(user[0])
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ response: 'Server Error' })
    }
})


app.listen(3001, process.env.URL, () => {
    console.log('>> App is running');
})