function openMenu() {
    document.body.classList.add("menu--open");
}

function closeMenu() {
    document.body.classList.remove("menu--open");
}


// https://www.omdbapi.com/?i=tt3896198&apikey=e16f3220

console.log(fetch("https://developer.uber.com/products"))

async function main() {
    const posts = await fetch("[GET] https://api-mobilespecs.azharimm.dev/top-by-fans");
    const postsData = await posts.json();
    console.log(postsData)
}
main()