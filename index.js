import express from 'express';
import routes from './src/routes/productRoutes.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


const PORT = 4500;
const app = express();

// Mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27019/product', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log(`Mongo Connected successfully!`)
    })
    .catch(err => {
        console.error('Mongo error:', err.stack);
        process.exit(1);
    });

//bodyParser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static('public/media'));

// fake display
app.get('/', (req, res) => res.send(`Welcome loading ...`));

app.listen(PORT, () => console.log(` Server running on PORT ${PORT}`));