let express = require ('express');
let app = express();
let mainRouter = require('./routes/main');

app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views','./src/views');

app.use('/', mainRouter);

app.listen(process.env.PORT || 3001, () => console.log('Server running: 3001'));