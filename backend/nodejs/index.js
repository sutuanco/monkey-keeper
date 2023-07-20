const express = require("express")
const cors = require("cors")

const PORT = 8000

const app = express()
app.use(cors({
    origin: "*"
}))

app.get("/", (req, res) => {
    res.send("Hello world!")
})

app.listen(PORT, () => console.log(`Listening on port ${PORT} ...`))
