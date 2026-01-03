

function signup(){

    return `
        <form id="signup" class="form">
            <span class="error"></span>
            <span class="title">SIGN UP</span>
            <input class="form-field" name="email" type="text" placeholder="Email">
            <input class="form-field" name="password" type="password" placeholder="Password">
            <button class="submit">SIGN UP</button>
            <div class="media-sign">
                <span class="media-sign-side"></span>
                <span class="media-sign-title">or signin with</span>
                <span class="media-sign-side"></span>
            </div>
            <div class="media-sign-options">
                <button class="media-sign-item" id="google-sign" type="button">Google</button>
                <button class="media-sign-item" id="github-sign" type="button">Github</button>
            </div>
            <span class="sign-action">Already have an account, <a class="action" href="/signin">Sign in</a></span>
        </form>
    `
}

function signin(){

    return `
         <form id="signin" class="form">
            <span class="error"></span>
            <span class="title">SIGN IN</span>
            <input class="form-field" name="email" type="text" placeholder="Email">
            <input class="form-field" name="password" type="password" placeholder="Password">
            <button class="submit">SIGN IN</button>
            <div class="media-sign">
                <span class="media-sign-side"></span>
                <span class="media-sign-title">or signin with</span>
                <span class="media-sign-side"></span>
            </div>
            <div class="media-sign-options">
                <button class="media-sign-item" id="google-sign" type="button">Google</button>
                <button class="media-sign-item" id="github-sign" type="button">Github</button>
            </div>
            <span class="sign-action">Don't have an account yet, <a class="action" href="/signup">Sign up</a></span>
        </form>
    `
}

function home({ user }){

    return `
        <div class="home">
            <span class="name">${user.email.split("@")[0].split("").map((letter, index) => index == 0 ? letter.toUpperCase() : letter).join("")}</span> 
            <button class="signout">SIGN OUT</button>
        </div>
    `
}

export { signup, signin, home }


