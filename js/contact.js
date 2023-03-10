const fullname = document.getElementById("fullname")
const email = document.getElementById("email")
const content = document.getElementById("content")
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput();

    const fullname = document.getElementById("fullname").value
    const email = document.getElementById("email").value
    const content = document.getElementById("content").value

    // have our values in one object
    const data = { fullname, email, content };

    // interaction with the API endpoint
    fetch('https://dizzy-ruby-gilet.cyclic.app/api/v1/queries', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((response) => {
            return response.json()
        })
        .then((res) => {
            console.log(res);
            if (res) {
                alert(res.message)
            } else {
                alert(res.errors)
            }

        })
        .catch(error => alert(error))
});




function checkInput() {
    // const usernameValue = username.value.trim();
    const fullnameValue = fullname.value.trim();
    const emailValue = email.value.trim();
    const contentValue = content.value.trim();



    if (fullnameValue === '') {
        setError(fullname, 'title must not be empty');
    } else {
        setSuccess(fullname);
    }

    if (emailValue === '') {
        setError(email, 'email must not be empty');
    } else if (!isEmail(emailValue)) {
        setError(email, 'email must be a valid');
    }
    if (contentValue === '') {
        setError(content, 'message must not be empty');
    } else {
        setSuccess(content);
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