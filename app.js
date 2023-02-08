const express = require("express");
const path = require("path");
const app = express();
const port = 80;

// For Express Specific Stuff
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// For pug Specific Stuff 
app.set('view engine', 'pug') // Setting the template engine as pug 
app.set('views', path.join(__dirname, 'views')) // For Setting the view directory

// ENDPOINTS - 
app.get('/', (req, res) => {
    const params = {}
    res.status(200).render('home.pug', params)
});
app.get('/contact', (req, res) => {
    const params = {}
    res.status(200).render('contact.pug', params)



});


// Starting the Server -
app.listen(port, () => {
    console.log(`The app started running successfully on port ${port}`);
});