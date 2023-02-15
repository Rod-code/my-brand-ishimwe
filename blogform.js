const form = document.getElementById("form");
const title = document.getElementById("title");
const author = document.getElementById("name");
const imagePicker = document.getElementById("image-picker");
const article = document.getElementById("article");

var uploadImage = "";

imagePicker.addEventListener("change", function() {
    const fileUpload = new FileReader();

    fileUpload.addEventListener("load", () => {
        uploadImage = fileUpload.result;
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