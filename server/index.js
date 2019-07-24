const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.static('dist'))

app.get('/api', (req, res) => res.send('Hello World!!!'))
app.use("*", (req, res) => res.status(404).send('Not found'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))