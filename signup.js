const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password1 = document.getElementById('password1');
const signup = document.getElementById('submit');

users = JSON.parse(localStorage.getItem('users')) || [];

function saveUser() {
    let user = {};
    user.username = username.value;
    // user.lastName = username.value.split(' ')[1];
    user.email = email.value
    user.password = password.value
    user.password1 = password1.value
        //   user.role = role.value
    users.push(user);
    const stringUsers = JSON.stringify(users);
    localStorage.setItem('users', stringUsers);
}

signup.onclick = saveUser;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput();
    saveUser();
    // if (isformValid() == true) {
    //     form.submit();
    // } else {

    // }
});

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
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password1Value = password1.value.trim();

    if (usernameValue === '') {
        setError(username, 'username must not be empty');
    } else {
        setSuccess(username);
    }
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
    if (password1Value === '') {
        setError(password1, 'password must not be empty');
    } else if (passwordValue !== password1Value) {
        setError(password1, 'passwords are not matching')
    } else {
        setSuccess(password1);
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