import express from "express"
import path from "path"

const app = express()

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(path.resolve("./public/frontpage/frontpage.html"))
})

app.get("/express", (req, res) => {
    res.sendFile(path.resolve("./public/express/express.html"))
})

app.get("/nodejs", (req, res) => {
    res.sendFile(path.resolve("./public/nodejs/nodejs.html"))
})

app.get("/nodemon", (req, res) => {
    res.sendFile(path.resolve("./public/nodemon/nodemon.html"))
})

app.get("/client-server-model", (req, res) => {
    res.sendFile(path.resolve("./public/client-server-model/client-server-model.html"))
})

app.get("/type-coercion", (req, res) => {
    res.sendFile(path.resolve("./public/type-coercion/type-coercion.html"))
})

app.listen(8080, () => {
    console.log("Server is running in port 8080");
})

