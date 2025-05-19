// Import express
const express = require('express');
const { default: mongoose } = require('mongoose');
const User = require('./models/userModel');



const connectDB = async () => {
    try {
        const connect = await mongoose.connect('mongodb://localhost:27017/docker-test')
        // const connect = await mongoose.connect(`${process.env.DB_URL}`)
        console.log(`\n Mongodb Connected !! DB Host : ${connect.connection.host}`)
        if(connect){
            console.log('DB is successfuly connected')        
        }

    } catch (error) {
        console.log('DB is not connected',error);
        process.exit(1)     
    }
};

connectDB();

// Create an express app
const app = express();
const PORT = 8080

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define a route for the root URL
app.get('/', async (req, res) => {
  const response = await User.find();
  res.send(response);
});

app.post('/create', async (req, res) => {
  console.log(req.body)
  const {email, password} = req.body
  const newUser = await User.create({
    email: email,
    password: password
  })
  return res.status(200).send(newUser)
});


// Set the server to listen on port 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
