import express from "express"
import path from "path"

const app = express()

app.use(express.static("public"))

// =============Read pages ============

import { frontpagePage, expressPage, nodejsPage, clientServerModelPage, nodemonPage, typeCoercionPage } from "./util/preparePages.js"

// ================= HTML =================

app.get("/", (req, res) => {
    res.send(frontpagePage)
})

app.get("/express", (req, res) => {
    res.send(expressPage)
})

app.get("/nodejs", (req, res) => {
    res.send(nodejsPage)
})

app.get("/nodemon", (req, res) => {
    res.send(nodemonPage)
})

app.get("/client-server-model", (req, res) => {
    res.send(clientServerModelPage)
})

app.get("/type-coercion", (req, res) => {
    res.send(typeCoercionPage)
})



const PORT = 8080
app.listen(PORT, () => {
    console.log("Server is running on", PORT)
})

