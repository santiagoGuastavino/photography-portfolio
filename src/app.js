const express = require('express')
const app = express()
const mainRouter = require('./routes/main')

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use('/', mainRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running @ ${PORT}`))
