import express from "express"

const app = express()

app.use(express.static("public"))

app.use(express.json())


// =============Read pages ============

import { frontpagePage, expressPage, nodejsPage, clientServerModelPage, nodemonPage, 
  typeCoercionPage, loginPage, adminPage, javascriptPage } from "./util/preparePages.js"

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

// ======= Login and Admin =========

const hardcodedUsername = "admin"
const hardcodedPassword = "nemathuske"

app.get("/login", (req, res) => {
    res.send(loginPage)
  })


app.post("/login", (req, res) => {
    const { username, password } = req.body
    console.log(username)
    console.log(password)
  
    if (username === hardcodedUsername && password === hardcodedPassword) {
      res.redirect('/admin')
    } else {
      res.status(401).send({ data: 'Login failed' })
    }
  })
  

  app.get("/admin", (req, res) => {
    res.send(adminPage)
  });
  



  const PORT = Number(process.env.PORT) || 8080

  app.listen(PORT, () => {
      console.log("Server is running on port", PORT)
  })
