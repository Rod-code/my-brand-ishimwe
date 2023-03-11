const form = document.getElementById('form');
const title = document.getElementById("title")
const author = document.getElementById("author")
const imageUrl = document.getElementById("image-picker")
const content = document.getElementById("article")






form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput();
    // signIn();
    const title = document.getElementById("title")
    const author = document.getElementById("author")
    const imageUrl = document.getElementById("image-picker")
    const content = document.getElementById("article")

    // have our values in one object
    const data = { title, author, imageUrl, content };

    // interaction with the API endpoint
    // const auth = JSON.parse(localStorage.getItem('auth'));
    fetch('http://localhost:6001/api/v1/blogs', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem('auth')

            },
            body: JSON.stringify(data)
        })
        .then((response) => {
            return response.json()
        })
        .then((blog) => {
            console.log(blog)
            if (blog.data) {
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
    const imageUrlValue = imageUrl.value.trim();
    const contentValue = content.value.trim();



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
    if (imageUrlValue === '') {
        setError(imageUrl, 'image must not be empty');
    } else {
        setSuccess(imageUrl);

    }
    if (contentValue === '') {
        setError(content, 'article must not be empty');
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



const blogsTable = document.querySelector('tbody');
// const articles = document.querySelector("#t-body");

const fetchBlogs = async() => {
    try {
        const response = await fetch(
            'https://dizzy-ruby-gilet.cyclic.app/api/v1/blogs', {
                method: 'GET',
            },
        );
        const blogs = response.json();
        return blogs;
    } catch (error) {
        console.log('No token provided: ', error.message);
    }
};

fetchBlogs()
    .then((res) => {
        console.log(res);
        res.data.forEach((element, index) => {
            blogsTable.insertAdjacentHTML(
                'afterbegin',
                ` 
        <tr>
        <td>${index+1}</td> 
        <td>${element.title}</td>
        <td>${element.author}</td>
        <td><img id="img-url" src="${element.imageUrl}" alt="" width="30" height="30"></td>
        <td>${element.content} </td>
        <td><button onclick="deleteBlog(${index})" class="delete-button">Delete</button><button onclick="updateArticle(${index})" class="edit-button">Edit</button></td>
        </tr>
      `,
            );
        });
    })



//*Deleting blogs from the t-body




async function deleteBlog(index) {
    console.log(index);
    // const token = JSON.parse(localStorage.getItem('token'));
    // let blogId = urlParams.get('id');
    await fetch(`http://localhost:6001/api/v1/blogs/${index}`, {
            method: "DELETE",
            headers: {
                // "Authorization": token
            }
        })
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            console.log(data);
            // alert(data.message);
        })
        .catch((error) => alert(error));

    alert("Blog has been deleted successfully")
        // window.location.reload();
}