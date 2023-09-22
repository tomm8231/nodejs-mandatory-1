import express from "express"
import path from "path"

const app = express()

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(path.resolve("./public/frontpage.html"))
})

app.get("/topic-1", (req, res) => {
    res.sendFile(path.resolve("./public/topic1.html"))
})

app.listen(8080, () => {
    console.log("Server is running in port 8080");
})

