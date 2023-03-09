const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const currentUser = JSON.parse(localStorage.getItem('currentUser'));
const login = document.getElementById('submit');



users = JSON.parse(localStorage.getItem('users')) || [];


form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput();
    // signIn();
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const data = { email, password }

    // use fetch method to interact with your login api endpoint
    fetch('https://dizzy-ruby-gilet.cyclic.app/api/v1/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            if (data.ok) {
                // set our token in LS

                localStorage.setItem("authToken", data.token)
                location.href = "./dashboard.html"

            } else {

                alert(data.message)
            }
        })
        .catch(err => alert(err))
});
// if (isformValid() == true) {
//     form.submit();
// } else {

// }


// function isformValid() {
//     const divForm = form.querySelectorAll('div-form');
//     let result = true;

//     divForm.forEach((container) => {
//         if (container.classList.contains('error')) {
//             result = false;
//         }
//     });
//     return result;
// }

function checkInput() {
    // const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();


    // if (usernameValue === '') {
    //     setError(username, 'username must not be empty');
    // } else {
    //     setSuccess(username);
    // }
    if (emailValue === '') {
        setError(email, 'email must not be empty');
    } else if (!isEmail(emailValue)) {
        setError(email, 'email must be a valid');
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'password must not be empty');
    } else {
        setSuccess(password);
    }

}

function setError(input, message) {
    const formValidator = input.parentElement;
    const small = formValidator.querySelector('small');
    small.innerText = message;
    formValidator.className = 'div-form fail';

}

function setSuccess(input) {
    const formValidator = input.parentElement;
    formValidator.className = 'div-form success';
}

function isEmail(email) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}


// function signIn() {
//     // check if user exists
//     const targetUser = users.find(user => user.email == email.value);
//     if (targetUser && targetUser.password == password.value) {
//         localStorage.setItem('currentUser', JSON.stringify(targetUser))
//         window.location.href = "./dashboard.html";
//     } else if (targetUser && targetUser.password != password.value) {
//         alert('wrong password');
//         // } else {
//         //     // user doesn't exist

//         //     window.location.href = './signup.html';
//         // }
//     }
// }

// login.onclick = signIn