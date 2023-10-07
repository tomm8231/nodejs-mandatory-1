import express from "express"

const app = express()

app.use(express.static("public"))

app.use(express.json())


// =============Read pages ============

import {
  frontpagePage, expressPage, nodejsPage, clientServerModelPage, nodemonPage,
  typeCoercionPage, loginPage, adminPage, javascriptPage, joeysPage, importExportPage, restApiDesignPage, learningGoalsPage
} from "./util/preparePages.js"

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

app.get("/javascript", (req, res) => {
  res.send(javascriptPage)
})

app.get("/joeys", (req, res) => {
  res.send(joeysPage)
})

app.get("/import-export", (req, res) => {
  res.send(importExportPage)
})

app.get("/rest-api-design", (req, res) => {
  res.send(restApiDesignPage)
})

app.get("/learning-goals", (req, res) => {
  res.send(learningGoalsPage)
})

// ======= Login and Admin =========

const hardcodedUsername = "admin"
const hardcodedPassword = "nemathuske"

app.get("/login", (req, res) => {
  res.send(loginPage)
})

/*
app.post("/login", (req, res) => {
  const { username, password } = req.body
  console.log(username)
  console.log(password)

  if (username === "admin" && password === "nemathuske") {
    res.redirect('/admin')
  } else {
    res.status(401).send({ data: 'Login failed' })
  }
})

*/



const PORT = Number(process.env.PORT) || 8080

app.listen(PORT, () => {
  console.log("Server is running on port", PORT)
})
