const blog = document.querySelector(".container");
const blogsBox = JSON.parse(localStorage.getItem("blogList")) || [];
// console.log(blogsDetails);

blogsBox.forEach((element) => {
    blog.insertAdjacentHTML('afterbegin', `
    <div class="post-blog">
    <div class="img-blog">
    <img src="${element.imagePicker}"></img>
    </div>
    <div class="post-test">
        <a href="" class="link-title">${element.title}</a>
        <p class="author">${element.author}</p>
        <p class="text">${element.article}</p>
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