const express = require('express');
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');
const bodyparser = require('body-parser');

// Load environment variables
dotenv.config();

const url = process.env.MONGO_URL || 'mongodb://localhost:27017';
const dbname = 'password';

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyparser.json());

const startServer = async () => {
    try {
        const client = new MongoClient(url);
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db(dbname);

        // Routes
        app.get('/', async (req, res) => {
            const db = client.db(dbname);
            const collection = db.collection('passwords');
            const findResult = await collection.find({}).toArray();
            res.json(findResult);
        });

        app.post('/', async(req,res) =>{
            const password = req.body
            const db = client.db(dbname);
            const collection = db.collection('passwords');
            const findResult = await collection.find({}).insertOne(password);
            res.send({succes: true, result:findResult});

        })

        // Start the server
        app.listen(port, () => {
            console.log(`Example app listening on http://localhost:${port}`);
        });
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1); // Exit the process with an error code
    }
};

// Start the application
startServer();
