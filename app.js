document.getElementById("blog-post").addEventListener("click", repeat)

function logPost() {
    console.log(document.getElementById("blog-post").innerHTML);
}

function repeat() {
    for (var v = 0; v < 3; v++) {
        document.getElementById("blog-post-" + v).innerHTML = document.getElementById("blog-post").innerHTML;
    }
}