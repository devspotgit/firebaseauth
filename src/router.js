

import { signin, signup, home } from "./pages.js"


const router = {

    app: document.querySelector("#app"),

    "/signin": function(){

        this.app.innerHTML = signin()

        document.title = "Firebaseauth - Signin"
    
        this.app.dispatchEvent(new CustomEvent("signin", { bubbles: true }))

    },

    "/signup": function(){

        this.app.innerHTML = signup()

        document.title = "Firebaseauth - Signup"

        this.app.dispatchEvent(new CustomEvent("signup", { bubbles: true }))
    },

    "/": function(data){

        this.app.innerHTML = home(data)

        document.title = "Firebaseauth - Home"
    
        this.app.dispatchEvent(new CustomEvent("home", { bubbles: true }))
    }
}


export { router }

