const form = document.getElementById('form');
// const title = document.getElementById("title")
// const author = document.getElementById("author")
// const imagePicker = document.getElementById("image-picker")
// const article = document.getElementById("article")






form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput();
    // signIn();
    const title = document.getElementById("title")
    const author = document.getElementById("author")
    const imagePicker = document.getElementById("image-picker")
    const article = document.getElementById("article")

    // have our values in one object
    const data = { title, author, imagePicker, article };

    // interaction with the API endpoint
    fetch('http://localhost:6001/api/v1/blogs', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            if (data.ok) {
                alert(data.message)
            } else {
                alert(data.errors.name)
            }
        })
        .catch(error => alert(error))
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
    const titleValue = title.value.trim();
    const authorValue = author.value.trim();
    const imagePickerValue = imagePicker.value.trim();
    const articleValue = article.value.trim();



    if (titleValue === '') {
        setError(title, 'title must not be empty');
    } else {
        setSuccess(title);
    }

    if (authorValue === '') {
        setError(author, 'author must not be empty');
    } else {
        setSuccess(author);

    }
    if (imagePickerValue === '') {
        setError(imagePicker, 'image must not be empty');
    } else {
        setSuccess(imagePicker);

    }
    if (articleValue === '') {
        setError(article, 'article must not be empty');
    } else {
        setSuccess(article);
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