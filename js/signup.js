const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password1 = document.getElementById('password1');
// const signup = document.getElementById('submit');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput();

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // const password1 = document.getElementById('password1').value;
    const isAdmin = true;
    const data = { fullname, email, password, isAdmin };

    // use fetch method to interact with your login api endpoint
    fetch('https://dizzy-ruby-gilet.cyclic.app/api/v1/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((res) => {
            console.log(res);
            // console.log("signup complete");
            if (res.data) {

                console.log(res, 'signup')
                    //  console.log('Signup complete');
                location.href = 'https://ishimwe-portfolio.netlify.app/dashboard.html';

            } else {
                alert(res.message);
                // console.log(res, "error")
            }
            // return resp;
        })
        .catch(err => alert(err))

});
















// .then((data) => {
//     console.log(data)
//     if (data) {

//         // set our token in LS

//         localStorage.setItem("authToken", data.token)
//             // localStorage.setItem('logIn', data.username);
//         location.href = "https://ishimwe-portfolio.netlify.app/login.html"

//     } else {

//         alert(data.message)
//         console.log(data.message)
//     }
// })
// .catch(err => alert(err))
// saveUser();
// if (isformValid() == true) {
//     form.submit();
// } else {

// }
// });

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
    const fullnameValue = fullname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password1Value = password1.value.trim();

    if (fullnameValue === '') {
        setError(fullname, 'username must not be empty');
    } else {
        setSuccess(fullname);
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