var form = document.getElementById('form');
var title = document.getElementById("title")
var author = document.getElementById("author")
var imagePicker = document.getElementById("image-picker")
var content = document.getElementById("content")
var submitButton = document.getElementById("submit")
var updateButton = document.getElementById("update")
var imgAccount = document.getElementById("img-account")
var imgUrl;
var imageUrl;


submitButton.onclick = function(e) {
    e.preventDefault();
    createBlog(title, author, content);

    //   getDataFromLocal();
    form.reset('');
    //   closeModalBtn.click();
};

const createBlog = async(title, author, content, imageUrl) => {
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var content = document.getElementById('content').value;
    // var imageUrl = imgUrl;
    try {

        const response = await fetch('https://dizzy-ruby-gilet.cyclic.app/api/v1/blogs/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // Authorization: `JWT ${localStorage.getItem('authToken')}`,
            },
            body: JSON.stringify({ title, author, content, imageUrl }),
        });
        const data = await response.json();
        console.log(data);
        if (data) {
            location.reload();
        } else {
            alert('Error creating blog');
        }
    } catch (error) {
        console.log('Error creating blog:', error.message);
    }
};

imagePicker.onchange = function() {
    if (imagePicker.files[0].size < 5000000) {
        //5000000 ~ 5mb (or 5000000bytes)
        var fReader = new FileReader();
        fReader.onload = function(e) {
            imgUrl = e.target.result;
            imgAccount.src = imgUrl;
            // console.log(imgUrl);
        };
        fReader.readAsDataURL(imagePicker.files[0]);
    } else {
        alert('The File size is too big');
    }
};



// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     checkInput();
//     // signIn();
//     const title = document.getElementById("title")
//     const author = document.getElementById("author")
//     const imageUrl = document.getElementById("image-picker")
//     const content = document.getElementById("article")

//     // have our values in one object
//     const data = { title, author, imageUrl, content };

//     // interaction with the API endpoint
//     // const auth = JSON.parse(localStorage.getItem('auth'));
//     fetch('http://localhost:6001/api/v1/blogs', {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 // "Authorization": auth


//             },
//             body: JSON.stringify(data)
//         })
//         .then((response) => {
//             return response.json()
//         })
//         .then((blog) => {
//             console.log(blog)
//             if (blog.data) {
//                 alert(data.message)
//             } else {
//                 alert(data.errors.name)
//             }
//         })
//         .catch(error => alert(error))
// });






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
    if (imagePickerValue === '') {
        setError(imagePicker, 'image must not be empty');
    } else {
        setSuccess(imagePicker);

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
        // console.log(res);
        res.data.forEach((element, index) => {
            // console.log(element._id);
            blogsTable.insertAdjacentHTML(
                'afterbegin',
                ` 
        <tr>
        <td>${index+1}</td> 
        <td>${element.title}</td>
        <td>${element.author}</td>
        <td><img id="img-url" src="${element.imageUrl}" alt="" width="30" height="30"></td>
        <td>${element.content} </td>
        <td><button onclick="deleteBlog('${element._id}')" class="delete-button">Delete</button><button onclick="getBlogToEdit('${element._id}')" class="edit-button">Edit</button></td>
        </tr>
      `,
            );
        });
    })



//*Deleting blogs from the t-body


function deleteBlog(id) {
    var ans = confirm('Are you sure you want to delete this blog?');

    // console.log(id);
    if (ans == true) {

        fetch(`https://dizzy-ruby-gilet.cyclic.app/api/v1/blogs/${id}`, {

                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    Authorization: `JWT ${localStorage.getItem('token')}`,
                },
                // body: JSON.stringify(),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                location.reload();
            })
            .catch((err) => {
                alert(err);
            });
    }
}





// const updateBlog = async(id) => {
//     try {
//         // editBlog.click();
//         const getBlog = await fetch(`http://localhost:6001/api/v1/blogs/${id}`);
//         const res = await getBlog.json();
//         console.log("Post: ", res);
//         imgAccount.style.display = 'block';
//         // imgAccount.src = res.data.imageUrl;


//         author.value = res.data.author;
//         title.value = res.data.title;
//         content.value = res.data.content;
//         // imageUrl.value = res.data.content;
//         // submitButton.disabled = true;
//         // updateButton.disabled = false;

//         localStorage.setItem('editBlog', id);
//     } catch (error) {
//         console.log('Error getting Blog: ', error.message);
//     }
// };

// const editBlog = async(title, author, content) => { //imageUrl
//     var _id = localStorage.getItem('editBlog');
//     // alert(_id);
//     var title = document.getElementById('title').value;
//     var author = document.getElementById('author').value;
//     var content = document.getElementById('content').value;
//     // var imageUrl = imgUrl;
//     try {
//         // let id;
//         const response = await fetch(
//             `http://localhost:6001/api/v1/blogs/${_id}`, {
//                 method: 'PUT',
//                 headers: {
//                     'content-type': 'application/json',
//                     // Authorization: `JWT ${localStorage.getItem('authToken')}`,
//                 },
//                 body: JSON.stringify({
//                     title: title,
//                     author: author,
//                     content: content,
//                     // imageUrl,
//                 }),
//             },
//         );
//         const data = await response.json();
//         if (data) {
//             console.log(data);
//             // location.reload();
//         } else {
//             console.log('Error editing blog', error);
//             // alert("Error editing blog");
//         }
//     } catch (error) {
//         console.log('Error editing blog: ', error.message);
//     }
// };

const getBlogToEdit = async(id) => {
    const getBlog = await fetch(`https://dizzy-ruby-gilet.cyclic.app/api/v1/blogs/${id}`);

    const res = await getBlog.json();
    console.log(res);
    imagePicker.style.display = 'block';
    imgAccount.src = res.data.imageUrl;

    console.log(res.data.author);
    author.value = res.data.author;
    title.value = res.data.title;
    content.value = res.data.content;
    document.getElementById("submit").style.display = "none";
    document.getElementById("update").style.display = "block";
    localStorage.setItem('blogToEdit', id);

    // var _id = localStorage.getItem('editBlog');
    // alert(_id);

}


const editBlog = async(title, author, content, imageUrl) => {
    var _id = localStorage.getItem('blogToEdit');
    // alert(_id);
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var content = document.getElementById('content').value;
    var imageUrl = imgUrl;
    try {
        // let id;
        const response = await fetch(
            `https://dizzy-ruby-gilet.cyclic.app/api/v1/blogs/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    // Authorization: `JWT ${localStorage.getItem('authToken')}`,
                },
                body: JSON.stringify({
                    title: title,
                    author: author,
                    content: content,
                    imageUrl,
                }),
            },
        );
        const data = await response.json();
        if (data) {
            location.reload();
        } else {
            console.log('Error editing blog', error);
            // alert("Error editing blog");
        }
    } catch (error) {
        console.log('Error editing blog: ', error.message);
    }
};

updateButton.onclick = () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const content = document.getElementById('content').value;
    const imageUrl = imgUrl;
    console.log(title);
    editBlog(title, author, content, imageUrl)
}

// updateButton.onclick = () => {
//     const title = document.getElementById('title').value;
//     const author = document.getElementById('author').value;
//     const content = document.getElementById('content').value;
//     // const imageUrl = imgUrl;
//     console.log(title);
//     editBlog(title, author, content); //imageUrl
// };

// const blogEdit = document.querySelector("edit-button");

// blogEdit.addEventListener("click", (e) => {
//     alert("Edit Blog");
// })

// blogEdit.onclick = () => {
//     alert("Edit Blog");
// }