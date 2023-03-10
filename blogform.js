function validateForm() {
    // const form = document.getElementById("form");
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var imagePicker = document.getElementById("image-picker").src;
    var article = document.getElementById("article").value;





    if (title === '') {
        alert("Title is required")
        return false;

    }
    if (author === '') {
        alert("author is required")
        return false;

    }
    // if (imagePicker === '') {
    //     alert("image is required")
    //     return false;
    // }
    if (article === '') {
        alert("article is required")
        return false;
    }
    return true;

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
        console.log('Error fetching blogs: ', error.message);
    }
};

fetchBlogs()
    .then((res) => {
        console.log(res);
        res.data.forEach((element, index) => {
            blogsTable.insertAdjacentHTML(
                'afterbegin',
                `
        <td>${index+1}</td> 
        <td>${element.title}</td>
        <td>${element.author}</td>
        <td><img id="img-url" src="${element.imagePicker}" alt="" width="30" height="30"></td>
        <td>${element.article} </td>
        <td><button onclick="deleteArticle(${index})" class="delete-button">Delete</button><button onclick="updateArticle(${index})" class="edit-button">Edit</button></td>
        </tr>
      `,
            );
        });
    })












// function showData() {

//     var blogList;
//     if (localStorage.getItem("blogList") == null) {
//         blogList = [];

//     } else {
//         blogList = JSON.parse(localStorage.getItem("blogList"));
//     }



//     var tableData = document.querySelector('#table-data');
//     tableData.innerHTML = "";
//     blogList.forEach(function(element, index) {
//         tableData.innerHTML += `


//         <td>${index+1}</td> 
//         <td>${element.title}</td>
//         <td>${element.author}</td>
//         <td><img id="img-url" src="${element.imagePicker}" alt="" width="30" height="30"></td>
//         <td>${element.article} </td>
//         <td><button onclick="deleteArticle(${index})" class="delete-button">Delete</button><button onclick="updateArticle(${index})" class="edit-button">Edit</button></td>
//         </tr>
//         `
//     });






// }

// document.onload = showData();

// function AddArticle() {
//     const imgUrl = localStorage.getItem("load-image");
//     if (validateForm() == true) {
//         var title = document.getElementById("title").value;
//         var author = document.getElementById("author").value;
//         // var imagePicker = document.getElementById("image-picker").src;
//         var article = document.getElementById("article").value;



//         var blogList;
//         if (localStorage.getItem("blogList") == null) {
//             blogList = [];

//         } else {
//             blogList = JSON.parse(localStorage.getItem("blogList"));
//         }

//         blogList.push({
//             id: Math.random(),
//             title: title,
//             author: author,
//             imagePicker: imgUrl,
//             article: article,
//         });

//         localStorage.setItem("blogList", JSON.stringify(blogList));
//         showData();
//         document.getElementById("title").value = "";
//         document.getElementById("author").value = "";
//         document.getElementById("image-picker").src = "";
//         document.getElementById("article").value = "";

//         // Set the id in the localStorage


//     }
// }

// // let theBlogID = blogList.id;
// // JSON.parse(localstorage.setItem("id", theBlogID));

// function deleteArticle(index) {
//     var blogList;
//     if (localStorage.getItem("blogList") == null) {
//         blogList = [];
//     } else {
//         blogList = JSON.parse(localStorage.getItem("blogList"));
//     }
//     blogList.splice(index, 1);
//     localStorage.setItem("blogList", JSON.stringify(blogList));
//     showData();
// }

// function updateArticle(index) {
//     document.getElementById("submit").style.display = "none";
//     document.getElementById("update").style.display = "block";

//     var blogList;
//     if (localStorage.getItem("blogList") == null) {
//         blogList = [];
//     } else {
//         blogList = JSON.parse(localStorage.getItem("blogList"));
//     }

//     document.getElementById("title").value = blogList[index].title;
//     document.getElementById("author").value = blogList[index].author;
//     document.getElementById("image-picker").src = blogList[index].imagePicker;
//     document.getElementById("article").value = blogList[index].article;

//     document.querySelector("#update").onclick = function() {
//         if (validateForm() == true) {
//             blogList[index].title = document.getElementById("title").value;
//             blogList[index].author = document.getElementById("author").value;
//             blogList[index].imagePicker = document.getElementById("image-picker").src;
//             blogList[index].article = document.getElementById("article").value;

//             localStorage.setItem("blogList", JSON.stringify(blogList));
//             showData();
//             document.getElementById("title").value = "";
//             document.getElementById("author").value = "";
//             document.getElementById("image-picker").src = "";
//             document.getElementById("article").value = "";
//             document.getElementById("submit").style.display = "block";
//             document.getElementById("update").style.display = "none";
//         }

//     }
// }