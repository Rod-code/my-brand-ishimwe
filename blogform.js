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
        
        <tr index='${index}'>   
        <td>${index+1}</td> 
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



        var blogList;
        if (localStorage.getItem("blogList") == null) {
            blogList = [];

        } else {
            blogList = JSON.parse(localStorage.getItem("blogList"));
        }

        blogList.push({
            id: Math.random(),
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

        // Set the id in the localStorage


    }
}

// let theBlogID = blogList.id;
// JSON.parse(localstorage.setItem("id", theBlogID));

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