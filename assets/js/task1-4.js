const isLogin = confirm("Is login?");

document.write(`
    <header class="header">
        <div class="container">
            <a class="logo" href="./task1-4.html">
                <img class="logo-image" src="./assets/images/logo.png" alt="Logo" />
            </a>
            <div class="header-right">
`);

if(!isLogin) {
    document.write(`
        <button class="btn signin-btn" type="button">Sign In</button>
        <button class="btn signup-btn" type="button">Sign Up</button>
    `);
} else {
    const userName = prompt('Input you user name', 'anonymus');
    const gender = prompt('Input "male" if you are man, "female" if you woman, any other characters or click cancel if you do not want to answer');
    const className = gender === 'male' ? 'is-male' : gender === 'female' ? 'is-female' : 'is-unknown';
    document.write(`
        <img class="user-img ${className}" src="./assets/images/user.png" alt="User image">
        <span class="user-name">${userName}</span>
    `)
}

document.write(`
            </div>
        </div>
    </header>
`)