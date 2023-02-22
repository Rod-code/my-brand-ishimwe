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




document.querySelector("#image-picker").addEventListener('change', function() {
    const fileUpload = new FileReader();


    fileUpload.addEventListener("load", () => {
        localStorage.setItem("load-image", fileUpload.result);


    });
    fileUpload.readAsDataURL(this.files[0]);


});

// blogList = JSON.parse(localStorage.getItem('blogList')) || [];

// document.addEventListener("DOMContentLoaded", () => {

//     if (imgUrl) {
//         document.querySelector("#img-url").setAttribute("src", imgUrl);
//     }
// });













function showData() {

    var blogList;
    if (localStorage.getItem("blogList") == null) {
        blogList = [];

    } else {
        blogList = JSON.parse(localStorage.getItem("blogList"));
    }



    var tableData = document.querySelector('#table-data');
    tableData.innerHTML = "";
    blogList.forEach(function(element, index) {
        tableData.innerHTML += `
        
        <tr>
        <td>${element.title}</td>
        <td>${element.author}</td>
        <td><img id="img-url" src="${element.imagePicker}" alt="" width="30" height="30"></td>
        <td>${element.article} </td>
        <td><button onclick="deleteArticle(${index})" class="delete-button">Delete</button><button onclick="updateArticle(${index})" class="edit-button">Edit</button></td>
        </tr>
        `
    });






}

document.onload = showData();

function AddArticle() {
    const imgUrl = localStorage.getItem("load-image");
    if (validateForm() == true) {
        var title = document.getElementById("title").value;
        var author = document.getElementById("author").value;
        // var imagePicker = document.getElementById("image-picker").src;
        var article = document.getElementById("article").value;
        var imgUrl1;


        var blogList;
        if (localStorage.getItem("blogList") == null) {
            blogList = [];

        } else {
            blogList = JSON.parse(localStorage.getItem("blogList"));
        }

        blogList.push({
            title: title,
            author: author,
            imagePicker: imgUrl,
            article: article,
        });

        localStorage.setItem("blogList", JSON.stringify(blogList));
        showData();
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("image-picker").src = "";
        document.getElementById("article").value = "";

    }
}

function deleteArticle(index) {
    var blogList;
    if (localStorage.getItem("blogList") == null) {
        blogList = [];
    } else {
        blogList = JSON.parse(localStorage.getItem("blogList"));
    }
    blogList.splice(index, 1);
    localStorage.setItem("blogList", JSON.stringify(blogList));
    showData();
}

function updateArticle(index) {
    document.getElementById("submit").style.display = "none";
    document.getElementById("update").style.display = "block";

    var blogList;
    if (localStorage.getItem("blogList") == null) {
        blogList = [];
    } else {
        blogList = JSON.parse(localStorage.getItem("blogList"));
    }

    document.getElementById("title").value = blogList[index].title;
    document.getElementById("author").value = blogList[index].author;
    document.getElementById("image-picker").src = blogList[index].imagePicker;
    document.getElementById("article").value = blogList[index].article;

    document.querySelector("#update").onclick = function() {
        if (validateForm() == true) {
            blogList[index].title = document.getElementById("title").value;
            blogList[index].author = document.getElementById("author").value;
            blogList[index].imagePicker = document.getElementById("image-picker").src;
            blogList[index].article = document.getElementById("article").value;

            localStorage.setItem("blogList", JSON.stringify(blogList));
            showData();
            document.getElementById("title").value = "";
            document.getElementById("author").value = "";
            document.getElementById("image-picker").src = "";
            document.getElementById("article").value = "";
            document.getElementById("submit").style.display = "block";
            document.getElementById("update").style.display = "none";
        }

    }
}




// var loadImage = document.querySelector("#img-url");
// var imagePicker = document.querySelector("#image-picker");
// loadImage.onchange = function() {
//     if (loadImage.files[0].size < 5000000) {
//         var fileUpload = new FileReader();
//         fileUpload.onload = function(e) {
//             imgUrl = e.target.result;
//             imagePicker.src = imgUrl;
//             console.log(imgUrl);
//         }
//         fileUpload.readAsDataURL(loadImage.files[0]);
//     } else {
//         alert("The File size is too big");
//     }
// }









// blogList.forEach(function(element, index) {

//     html += "<tr>";
//     html += "<td>" + element.title + "</td>";
//     html += "<td>" + element.author + "</td>";
//     html += "<td>" + "<img src='${element.imagePicker}'>" + "</td>";
//     html += "<td>" + element.article + "</td>";
//     html +=
//         '<td><button onclick="deleteArticle(' +
//         index +
//         ')" class="delete-button">Delete</button><button onclick="updateArticle(' +
//         index + ')" class="edit-button">Edit</button></td>';
//     html += "</tr>";
// });
// document.querySelector("#article-table tbody").innerHTML = html;