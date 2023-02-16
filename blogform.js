const form = document.getElementById("form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const imagePicker = document.getElementById("image-picker");
const article = document.getElementById("article");
const submit = document.getElementById('submit');

var uploadImage = "";

imagePicker.addEventListener("change", function() {
    const fileUpload = new FileReader();

    fileUpload.addEventListener("load", () => {
        localStorage.setItem("image-picker", fileUpload)
        uploadImage = fileUpload.result;;
        document.getElementById("display").style.backgroundImage = `url(${uploadImage})`;

    });
    fileUpload.readAsDataURL(this.files[0]);
})





const inputs = [
    title,
    author,
    imagePicker,
    article
]

let isFormValid = false;
let isValidOn = false;

const resetForm = (el) => {
    el.nextElementSibling.classList.add("hidden");

};

const invalidForm = (el) => {
    el.nextElementSibling.classList.remove("hidden");

}

const validForm = () => {
    if (!isValidOn) return
    isFormValid = true;

    inputs.forEach(resetForm)

    if (!title.value) {
        isFormValid = false;
        invalidForm(title);
    }
    if (!author.value) {
        isFormValid = false;
        invalidForm(author);
    }
    if (!imagePicker.value) {
        isFormValid = false;
        invalidForm(imagePicker);
    }
    if (!article.value) {
        isFormValid = false;
        invalidForm(article);
    }
    if (!imagePicker.value) {
        isFormValid = false;
        invalidForm(imagePicker);
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    isValidOn = true;
    validForm();
    showData();
    AddArticle();
    // if (isFormValid) {
    //     form.remove();
    //     thankYou.classList.remove("hidden");
    // }
});

inputs.forEach((input) => {
    input.addEventListener("input", () => {
        validForm();
    });

});




function showData() {
    var blogList;
    if (localStorage.getItem("blogList") == null) {
        blogList = [];

    } else {
        blogList = JSON.parse(localStorage.getItem("blogList"));
    }
    var html = "";


    blogList.forEach(function(element, index) {
        html += "<tr>";
        html += "<td>" + element.title + "</td>";
        html += "<td>" + element.author + "</td>";
        html += "<td>" + element.imagePicker + "</td>";
        html += "<td>" + element.article + "</td>";
        html +=
            '<td><button onclick=" deleteArticle(' +
            index +
            ') " id="delete ">Delete</button><button onclick="updateArticle(' +
            index + ') " id="edit ">Edit</button></td>';
        html += "</tr>";
    });
    document.querySelector("#article-table tbody").innerHTML = html;
}

document.onload = showData();

function AddArticle() {
    if (validForm() == true) {
        var title = document.getElementById("title").value;
        var author = document.getElementById("author").value;
        var imagePicker = document.getElementById("image-picker").value;
        var article = document.getElementById("article").value;


        var blogList;
        if (localStorage.getItem("blogList") == null) {
            blogList = [];

        } else {
            blogList = JSON.parse(localStorage.getItem("blogList"));
        }

        blogList.push({
            title: title,
            author: author,
            imagePicker: imagePicker,
            article: article,
        });

        localStorage.setItem("blogList", JSON.stringify(blogList));
        showData();
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("image-picker").value = "";
        document.getElementById("article").value = "";

    }
}

function deleteArticle(index) {
    var blogList;
    if (localStorage.getItem("peopleList") == null) {
        blogList = [];
    } else {
        blogList = Json.parse(localStorage.getItem("blogList"));
    }
    blogList.splice(index, 1);
    localStorage.setItem("blogList", JSON.stringify(blogList));
    showData;
}

function updateData(index) {
    document.getElementById("submit").style.display = "none";
    document.getElementById("submit").style.display = "block";

    var blogList;
    if (localStorage.getItem("blogList") == null) {
        blogList = []; //
    } else {
        blogList = JSON.parse(localStorage.getItem("bloglList"));
    }

    document.getElementById("title").value = blogList[index].title;
    document.getElementById("author").value = blogList[index].author;
    document.getElementById("image-picker").value = blogList[index].imagePicker;
    document.getElementById("title").value = blogList[index].article;

    document.querySelector("#submit").onclick = function() {
        if (validForm() == true) {
            blogList[index].title = document.getElementById("title").value;
            blogList[index].author = document.getElementById("author").value;
            blogList[index].imagePicker = document.getElementById("image-picker").value;
            blogList[index].article = document.getElementById("article").value;

            localStorage.setItem("blogList", JSON.stringify(blogList));
            showData();
            document.getElementById("title").value = "";
            document.getElementById("author").value = "";
            document.getElementById("image-picker").value = "";
            document.getElementById("article").value = "";
            document.getElementById("submit").style.display = "block";
            document.getElementById("submit").style.display = "none";
        }

    }
}