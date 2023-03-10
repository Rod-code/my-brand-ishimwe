// function validateQuery() {
//     // const form = document.getElementById("form");
//     var fullName = document.getElementById("fullname").value;
//     var emailAddress = document.getElementById("email").value;
//     var message = document.getElementById("message").value;




//     if (fullName === '') {
//         alert("your name required")
//         return false;

//     }
//     if (emailAddress === '') {
//         alert("your is required");
//         return false;

//     } else if (!emailAddress.includes("@")) {
//         alert("Please enter a valid email address");
//         return false;
//     } else if (message === '') {
//         alert("Please enter a message");
//         return false;
//     }
//     return true;
// }







// function showData() {
//     var queryList;
//     if (localStorage.getItem("queryList") == null) {
//         queryList = [];

//     } else {
//         queryList = JSON.parse(localStorage.getItem("queryList"));
//     }
//     var html = "";


//     queryList.forEach(function(element) {
//         html += "<tr>";
//         html += "<td>" + element.fullName + "</td>";
//         html += "<td>" + element.emailAddress + "</td>";
//         html += "<td>" + element.message + "</td>";
//         html += "</tr>";
//     });
//     document.querySelector("#query-table tbody").innerHTML = html;
// }

// document.onload = showData();

// function AddQuery() {
//     if (validateQuery() == true) {
//         var fullName = document.getElementById("fullname").value;
//         var emailAddress = document.getElementById("email").value;
//         var message = document.getElementById("message").value;



//         var queryList;
//         if (localStorage.getItem("queryList") == null) {
//             queryList = [];

//         } else {
//             queryList = JSON.parse(localStorage.getItem("queryList"));
//         }

//         queryList.push({
//             fullName: fullName,
//             emailAddress: emailAddress,
//             message: message,

//         });

//         localStorage.setItem("queryList", JSON.stringify(queryList));
//         showData();
//         document.getElementById("fullname").value = "";
//         document.getElementById("email").value = "";
//         document.getElementById("message").value = "";


//     }
// }







// const isValidEmail = (email) => {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// };