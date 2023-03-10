const blog = document.querySelector(".container");
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
        console.log('Error fetching blogs: ', error.message);
    }
};

fetchBlogs()
    .then((res) => {
        console.log(res);
        res.data.forEach((item, index) => {
            blog.insertAdjacentHTML(
                'afterbegin',
                `
                h2>${item.title}</h2>
            <img src="${item.imageUrl}" class = "img-post"></img>
            <p class="date">jan 26th 2023</p>
            <p class="date">${item.author}</p>

            <p class="text">${item.content}</p>
            <!-- <div class="comment">
                <p>1</p>
                <p>comment</p>
            </div> -->
            `)
        });
    })

// const blogsBox = JSON.parse(localStorage.getItem("blogList")) || [];
// // console.log(blogsDetails);
// var id = localStorage.getItem('id');
// console.log(id)

// blog.insertAdjacentHTML('afterbegin', `

//             <h2>${blogsBox[id].title}</h2>
//             <img src="${blogsBox[id].imagePicker}" class = "img-post"></img>
//             <p class="date">jan 26th 2023</p>
//             <p class="date">${blogsBox[id].author}</p>

//             <p class="text">${blogsBox[id].article}</p>
//             <!-- <div class="comment">
//                 <p>1</p>
//                 <p>comment</p>
//             </div> -->
//         `);

// const form = document.querySelector('#form');
// const submit = document.querySelector('#submit');
// const userName = document.querySelector('#user-name');
// const comment = document.querySelector('#comment');
// const likes = document.querySelector(".img-react")
// const count = document.querySelector(".count");


// likes.addEventListener('click', likeBlog)
// submit.addEventListener('click', submitComment)

// addFeedback = [];
// let positiveComment = false;
// let likeCount = 0;

// function submitComment(e) {
//     const userForm = userName.value;
//     const commentForm = comment.value
//     if (userForm && commentForm !== '') {
//         newComment = {
//             "id": Math.floor((Math.random() * 1000) + 1),
//             "userName": userForm,
//             "userComment": commentForm,
//             "typeOffComment": positiveComment,



//         }
//         addFeedback.push(newComment)
//         if (positiveComment === true) {
//             addLikes()

//         }

//         resetSubmitForm()

//         addFeedback(newComment)


//     }
//     e.preventDefault();
// }

// function likeBlog() {
//     likes.classList.contains('img-react')
//     if (likes.classList.contains('.img-react')) {
//         likes.innerHTML = ` <img src="images/like.png" alt="" class="img-react">`
//         positiveComment = true;
//     } else {
//         likes.innerHTML = ` <img src="images/like.png" alt="" class="img-react">`
//         positiveComment = false;
//     }


// }


// function addLikes() {
//     likeCount++
//     count.innerHTML = likeCount
// }

// function resetSubmitForm() {
//     userName.value = '';
//     comment.value = '';
//     likes.innerHTML = ` <img src="images/like.png" alt="" class="img-react">`;
//     positiveComment = false;
// }


// function addFeedback(element) {
//     const msg = (element.userName).charAt(0)
//     const div = document.createElement('div');
//     div.classList = 'comment-box'

//     div.id = item.id;
//     div.innerHTML = ` <div>
//     <p class="text">${element.msg}</p>
//     <h3>${element.userName}</h3>
// </div>`

//     commentsCount.insertAdjacentElement('beforeend', div)
// }


form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkValue();
    // showInfo();

});


function checkValue() {
    // const usernameValue = username.value.trim();
    const userNameValue = userName.value.trim();
    const commentValue = comment.value.trim();


    if (userNameValue === '') {
        setError(userName, 'username must not be empty');
    } else {
        setSuccess(comment);
    }

    if (commentValue === '') {
        setError(comment, 'password must not be empty');
    } else {
        setSuccess(comment);
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





























// function showInfo() {
//     var commentList;
//     if (localStorage.getItem("commentList") == null) {
//         commentList = [];

//     } else {
//         commentList = JSON.parse(localStorage.getItem("commentList"));
//     }



//     var commentBox = document.querySelector('.comment-box');
//     // var outputData = JSON.parse(localStorage.getItem("commentList")) || [];

//     outputData.forEach((element) => {
//         commentBox.insertAdjacentHTML('afterbegin', `
//         <div>
//         <p>${element.comment}</p>
//         <h3>${element.userName}</h3>
//     </div>
//             `)
//     });
// }

// document.onload = showInfo();

// function AddComment() {
//     if (checkValue() == true) {
//         var userName = document.getElementById("user-name").value;
//         var comment = document.getElementById("comment").value;




//         var commentList;
//         if (localStorage.getItem("commentList") == null) {
//             commentList = [];

//         } else {
//             commentList = JSON.parse(localStorage.getItem("commentList"));
//         }

//         commentList.push({
//             userName: userName,
//             comment: comment,


//         });

//         localStorage.setItem("commentList", JSON.stringify(commentList));
//         showInfo();
//         document.getElementById("user-name").value = "";
//         document.getElementById("comment").value = "";



//     }
// }