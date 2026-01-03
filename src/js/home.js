

import { auth } from "../firebaseConfig.js"

import { signOut } from "firebase/auth"

function home(){

    const signout = document.querySelector(".signout")

    signout.addEventListener("click", async () => {

        try{

            await signOut(auth)
        }
        catch(error){

            console.log(error.message)
        }
    })
}

export { home }

