const express = require("express")
const cors = require("cors")
const db = require("./src/database/pg")

require('dotenv').config()
const PORT = 8000

const app = express()
app.use(cors({
    origin: "*"
}))

app.get("/", (req, res) => {
    console.log("Request received !")
    res.send("Hello world!")
});

(async () => {
    await db.connect_db()
    app.listen(PORT, () => console.log(`Listening on port ${PORT} ...`))
})();

