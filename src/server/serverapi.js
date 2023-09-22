const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Connect to MongoDB (replace 'your-database-url' with your actual MongoDB URL)
mongoose.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a MongoDB schema for your data
const dataSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const DataModel = mongoose.model('Data', dataSchema);

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Define the POST route to insert multiple data records
app.post('/api/data', async (req, res) => {
  try {
    // Extract an array of data objects from the request body
    const data = [
        {
          "name":"ram",
          "age":"244"        
        },
          {
          "name":"shayam",
          "age":"243"        
        }
    ]
    const dataObjects = req.body.data;

    // Validate dataObjects (you can add more validation as needed)
    if (!Array.isArray(dataObjects) || dataObjects.length === 0) {
      return res.status(400).json({ error: 'Invalid data format' });
    }

    // Insert data objects into MongoDB
    const insertedData = await DataModel.insertMany(dataObjects);

    res.status(201).json({ message: 'Data inserted successfully', data: insertedData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
