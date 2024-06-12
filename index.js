import express from 'express'
import router from './routes/index.js';
import db from './config/db.js';


const app = express();

db.authenticate()
    .then( () => console.log('DB conectada') )
    .catch( error => console.log(error) );

const port = process.env.PORT || 3000;

app.set('view engine', 'pug');


app.use( (req, res, next) => {
    const year = new Date();
    res.locals.nowYear = year.getFullYear();
    res.locals.siteName = "Agencia de Viajes";
    return next();
})

app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

app.use('/', router);

app.listen(port, () => {
    console.log(`El servidor esta usando el puerto ${port}`);
})