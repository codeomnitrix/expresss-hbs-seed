import express, { json, urlencoded } from "express";
import handlebars from "express-handlebars";
import path from 'path';

const app = express();
const __dirname = path.resolve();
app.use(json());
app.use(urlencoded({extended: true}));
app.set('view engine', 'hbs');

const port = 3000;

app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'index',
    partialsDir: __dirname + '/views/partials'
}));

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render('main', {layout : 'index', proPlayer: "Test Player"});
});

app.listen(port, () => console.log("Listening at port 3000"));