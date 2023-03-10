const blogContainer = document.querySelector(".container");
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
            blogContainer.insertAdjacentHTML(
                'afterbegin',
                `
                <div class="post-blog">
                <div class="img-blog">
                <img src="${item.imageUrl}"></img>
                </div>
                <div class="post-test">
                    <a href="" class="link-title">${item.title}</a>
                    <p class="author">${item.author}</p>
                    <p class="text">${item.content}</p>
                    <a href="./fullblog.html" class="rd-more">Read More</a>
                    <div class="div-react">
                        <img src="images/chat.png" alt="" class="img-react">
                        <p>1</p>
                        <img src="images/like.png" alt="" class="img-react">
                        <p>12</p>
                    </div>
                </div>
            `)
        });
    })



// const blogContainer = document.querySelector(".container");



// const blogPage = JSON.parse(localStorage.getItem("blogList")) || [];

// // var id = localStorage.getItem('id');
// // console.log(id)

// blogPage.forEach((item, index) => {
//     blogContainer.insertAdjacentHTML('afterbegin', `
//         <div class="post-blog">
//         <div class="img-blog">
//         <img src="${item.imagePicker}"></img>
//         </div>
//         <div class="post-test">
//             <a href="" class="link-title">${item.title}</a>
//             <p class="author">${item.author}</p>
//             <p class="text">${item.article}</p>
//             <a href="./fullblog.html" class="rd-more">Read More</a>
//             <div class="div-react">
//                 <img src="images/chat.png" alt="" class="img-react">
//                 <p>1</p>
//                 <img src="images/like.png" alt="" class="img-react">
//                 <p>12</p>
//             </div>
//         </div>
//     `)
// });





// blogContainer.insertAdjacentHTML('afterbegin', `
//     <div class="post-blog">
//     <div class="img-blog">
//      <img src="${blogPage[id].imagePicker}"></img>
//     </div>
//     <div class="post-test">
//          <a href="" class="link-title">${blogPage[id].title}</a>
//         <p class="author">${blogPage[id].author}</p>
//         <p class="text">${blogPage[id].article}</p>
//         <a href="./fullblog.html" class="rd-more">Read More</a>
//         <div class="div-react">
//             <img src="images/chat.png" alt="" class="img-react">
//             <p>1</p>
//             <img src="images/like.png" alt="" class="img-react">
//             <p>12</p>
//         </div>
//     </div>
//         `);