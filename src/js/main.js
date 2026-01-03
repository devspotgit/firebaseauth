

import { home } from "./home.js"

import { signin } from "./signin.js"

import { signup } from "./signup.js"

const app = document.querySelector("#app")

app.addEventListener("signin", () => {

    signin()
})

app.addEventListener("signup", () => {

    signup()
})

app.addEventListener("home", () => {

    home()
})


