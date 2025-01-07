const express = require('express');
const path = require('path');
const cors = require('cors');


const userRoutes = require('./routes/userRoutes')
const campaignRoutes = require('./routes/campaignRoutes')
const donatedUserRoutes = require('./routes/donatedUserRoutes')

const app = express();
const port = process.env.PORT || 3000;


app.set('view engine', 'ejs');  

// this two lines called parser
//are middleware in an Express.js application that handle incoming data in different formats
app.use(cors());
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));
app.use(express.static(path.join(__dirname, 'public'))); // shb static files er jonne public e jao


app.get('/', (req, res) => {
  res.send('Hello....chill server is running');
})


app.use('/api', userRoutes);
app.use('/api', campaignRoutes);
app.use('/api', donatedUserRoutes);


app.listen(port, () => {
  console.log(`server is running at port ${port} `)
})