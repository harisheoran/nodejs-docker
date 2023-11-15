const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("<h1> Full end to end DevOps Project</h1>")
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`listining on ${port}`))