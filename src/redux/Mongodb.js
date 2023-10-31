const { MongoClient } = require('mongodb');

// Replace 'your_connection_uri' with your MongoDB connection URI
const uri = 'your_connection_uri';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB database
async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to the database');
  } catch (err) {
    console.error('Error connecting to the database', err);
  }
}

// Call the connectDB function to establish a connection
connectDB();
