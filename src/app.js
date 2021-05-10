const express = require ('express');
const app = express();
const mainRouter = require('./routes/main');

app.use(express.static('public'));

app.use('/', mainRouter);

app.listen(3001, () => console.log('Server running: 3001'));