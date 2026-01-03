
import { router } from "./router.js"

import { onAuthStateChanged } from "firebase/auth"

import { auth } from "./firebaseConfig.js"

const app = document.querySelector("#app")

let currentPath = null

app.addEventListener("click", (e) => {

    if(e.target.tagName == "A" && location.hostname == e.target.hostname){

        e.preventDefault()

        if(currentPath != e.target.pathname){

            currentPath = e.target.pathname

            router[currentPath]()

            history.pushState({path: currentPath}, "", currentPath)
        }
    }
})

window.addEventListener("popstate", e => {

    currentPath = e.state.path

    router[e.state.path]()
})

onAuthStateChanged(auth, (user) => {

    if(user){

        if(currentPath == null){

            currentPath = "/"

            router["/"]({ user: user })
    
            history.replaceState({path: currentPath}, "", currentPath)
        }
        else{

            if(currentPath != "/"){

                currentPath = "/"

                router["/"]({ user: user })
    
                history.pushState({path: currentPath}, "", currentPath)
            }
        }
    }
    else{

        if(currentPath == null){

            currentPath = location.pathname == "/" ?  "/signin" : location.pathname
            
            router[currentPath]()
    
            history.replaceState({path: currentPath}, "", currentPath)
        }
        else{

            if(currentPath != "/signin"){
    
                currentPath = "/signin"
                
                router["/signin"]()
        
                history.pushState({path: currentPath}, "", currentPath)
            }
        }
    }
})

