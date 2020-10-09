let express = require('express');
let cors = require('cors');
let bodyparser = require('body-parser');
let hbs = require('express-handlebars');
let path = require('path');
let db = require('./models');

let PORT = process.env.PORT || 4800;
let app = express();


//CONFIGURACION DE HANDLEBARS COMO MOTOR DE PLANTILLAS
app.engine('hbs', hbs({ defaultLayout: 'base', extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '/public')));

//MIDDLEWARES
app.use(cors());
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: false }));

//ENRUTADORES
const indexRouter = require('./routes/index.routes');
app.use('/index', indexRouter);

db.sequelize.sync()
    .then(()=>{
        console.log(`All model has been created`)
        app.listen(PORT, ()=>{
            console.log(`Server is running on PORT: ${PORT}`);
        })
    })
    .catch(error =>{
        console.log(`Warning!: ${error}`)
    })

