// 3
const cors = require('cors');
require('./config/db');

const app = require('express')();
const port = 5500;
app.use(cors())
const quizRouter = require('./api/quiz');

//4
//importing a middleware which helps us to handle data sent
//in a particular format called JSON. it helps the app to understand
// and use the data easily by parsing it and making it available in a format
//that our app can work with 

const bodyParser = require('express').json;
app.use(bodyParser());

app.use('/quiz', quizRouter); 
//6
//This means that any HTTP requests that 
//start with the '/User' path
// will be handled by the routes defined in the UserRouter object.

app.listen(port, () => {
    console.log(`server running on port ${port}` );
})







