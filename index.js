const express = require("express")
const app = express()

var cors = require('cors')

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors())

let jokes = []

app.post("/new", (req, res) => {
    jokes.push(req.body)
    res.sendStatus(200)
})

app.get("/jokes", (req, res) => {
    res.send(jokes)
})

//

app.get("/joke/:id", (req, res) => {
    if (req.params.id >= jokes.length) {
        res.send("Joke not created.")
    } else {
        res.send(jokes[req.params.id])
    }
})


app.get("/delete/:id", (req, res) => {
    if (req.params.id >= jokes.length) {
        res.send("Joke does not exist.")
    } else {
        jokes.splice(req.params.id, 1)
        res.send(jokes)
    }
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})
