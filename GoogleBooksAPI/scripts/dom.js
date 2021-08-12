import { getBooks } from "./api.js";
import { card } from "./bookCard.js";

const form = document.getElementById("searchForm");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const searchString = document.getElementById("searchInput").value; //store the contents of the search box
    document.getElementById("searchInput").value = ""; //clear the search box
    const books = await getBooks(searchString); //get results from the API

    //if there is no thumbnail image for a result, this image will be displayed instead
    const noImage =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png";

    document.getElementById("display").innerHTML = ""; //this clears the previously rendered search results
    document.getElementById("errorDisplay").innerHTML = ""; //this clears any previously rendered error message

    if (!searchString) {
        document.getElementById("errorDisplay").innerHTML +=
            "<h5 class='error'>Please enter a search string</h5>";
        return;
    }
    if (books == undefined) {
        console.log("itruns");
        document.getElementById("errorDisplay").innerHTML +=
            "<h5 class='error'>No results</h5>";
        return;
    }
    for (let i = 0; i < books.length; i++) {
        let imgSrc = "";
        if (books[i].volumeInfo.imageLinks !== undefined) {
            imgSrc = books[i].volumeInfo.imageLinks.thumbnail;
        } else imgSrc = noImage;
        const authors = books[i].volumeInfo.authors;
        const title = books[i].volumeInfo.title;
        const description =
            books[i].volumeInfo.description || "No description available";

        document.getElementById("display").innerHTML += card(
            imgSrc,
            title,
            authors,
            description
        );
    }
});
