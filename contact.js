const form = document.getElementById("form");
const fullName = document.getElementById("fullname");
const emailAddress = document.getElementById("email");
// const phoneNumber = document.getElementById("phonenumber");

const message = document.getElementById("message");
// const thankYou = document.getElementById("thanks")



const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

// const isValidPhone = (phone) => {
//     const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
//     return re.test(String(phone).toLowerCase());
// };

const inputs = [
    fullName,
    emailAddress,
    // phoneNumber,
    message
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

    if (!fullName.value) {
        isFormValid = false;
        invalidForm(fullName);
    }
    if (!isValidEmail(emailAddress.value)) {
        isFormValid = false;
        invalidForm(emailAddress);
    }
    // if (!isValidPhone(phoneNumber.value)) {
    //     isFormValid = false;
    //     invalidForm(phoneNumber);
    // }
    if (!message.value) {
        isFormValid = false;
        invalidForm(message);
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


const contacts = [{
    fullame: "ishimwe",
    email: "ishimwerodrgiue10@gmail.com",
    message: "Hello are you there"
}];
const addMsg = (fullname, email, message) => {}

const createMsgEl = () => {
    const MsgTable = document.createElement('table');
    const msgName = document.createElement('td');
    const msgEmail = document.createElement('td');
    const msg = document.createElement('td');


}