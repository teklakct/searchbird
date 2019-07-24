const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.static('dist'))

app.get('/api', (req, res) => {
    const searchFor = req.query.s || '';

    const medias = [
        'https://cdn.pixabay.com/photo/2019/07/22/08/59/market-4354598__340.jpg',
        'https://cdn.pixabay.com/photo/2019/07/22/16/13/children-4355469__340.jpg',
        'https://cdn.pixabay.com/photo/2019/06/13/05/15/elephant-4270753__340.jpg',
    ]

    res.json(medias)
})

app.use("*", (req, res) => res.status(404).send('Not found'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))