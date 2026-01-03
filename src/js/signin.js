
import { auth } from "../firebaseConfig.js"

import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth"

function signin(){

    const error = document.querySelector(".error")

    const form = document.querySelector("#signin")

    const googleSign = document.querySelector("#google-sign")

    const githubSign = document.querySelector("#github-sign")

    form.addEventListener("submit", async e => {

        e.preventDefault()

        const formData = new FormData(form)

        try{

            await signInWithEmailAndPassword(auth, formData.get("email"), formData.get("password"))
        }
        catch(er){

            error.innerHTML = er.message.split(":")[1]
        }
    })

    googleSign.addEventListener("click", async () => {

        const provider = new GoogleAuthProvider()

        try{

            await signInWithPopup(auth, provider)
        }
        catch(er){

            console.log(er.message)
        }

    })

    githubSign.addEventListener("click", async () => {

        const provider = new GithubAuthProvider()

        try{

            await signInWithPopup(auth, provider)
        }
        catch(er){

            console.log(er.message)
        }
    })
}

export { signin }

