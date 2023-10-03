import { readPage, renderPage } from "./templateEngine.js"

const frontpage = readPage("./public/pages/frontpage/frontpage.html")
export const frontpagePage = renderPage(frontpage,
    {
        tabTitle: "Mandatory I | Front",
        cssLinks: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`,
        bodyClass: "frontpage"
    })


const express = readPage("./public/pages/express/express.html")
export const expressPage = renderPage(express,
    {
        tabTitle: "Mandatory I | Express",
        cssLinks: `<link rel="stylesheet" href="/pages/express/express.css">`,
        bodyClass: "express"
    })


const nodejs = readPage("./public/pages/nodejs/nodejs.html")
export const nodejsPage = renderPage(nodejs,
    {
        tabTitle: "Mandatory I | Node.js",
        cssLinks: `<link rel="stylesheet" href="/pages/nodejs/nodejs.css">`,
        bodyClass: "nodejs"
    })


const clientServerModel = readPage("./public/pages/client-server-model/client-server-model.html")
export const clientServerModelPage = renderPage(clientServerModel,
    {
        tabTitle: "Mandatory I | Client-Server Model",
        cssLinks: `<link rel="stylesheet" href="/pages/client-server-model/client-server-model.css">`,
        bodyClass: "client-server-model"
    })


const nodemon = readPage("./public/pages/nodemon/nodemon.html")
export const nodemonPage = renderPage(nodemon,
    {
        tabTitle: "Mandatory I | Nodemon",
        cssLinks: `<link rel="stylesheet" href="/pages/nodemon/nodemon.css">`,
        bodyClass: "nodemon"
    })


const typeCoercion = readPage("./public/pages/type-coercion/type-coercion.html")
export const typeCoercionPage = renderPage(typeCoercion,
    {
        tabTitle: "Mandatory I | Type Coercion",
        cssLinks: `<link rel="stylesheet" href="/pages/type-coercion/type-coercion.css">`,
        bodyClass: "type-coercion"
    })

const login = readPage("./public/pages/login/login.html")
export const loginPage = renderPage(login,
    {
        tabTitle: "Mandatory I | Login",
        cssLinks: `<link rel="stylesheet" href="/pages/login/login.css">`,
        bodyClass: "admin"
    })

const admin = readPage("./public/pages/admin/admin.html")
export const adminPage = renderPage(admin,
    {
        tabTitle: "Mandatory I | Admin",
        cssLinks: `<link rel="stylesheet" href="/pages/admin/admin.css">`,
        bodyClass: "admin"
    })