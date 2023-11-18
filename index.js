const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("<h1> Hello there, Full end to end DevOps project.(Node, CI/CD, Jenkins, Containerization, AWS)</h1>")
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`listining on ${port}`))