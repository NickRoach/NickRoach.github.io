export const card = (imgSrc, title, authors, description) => {
    const authorPlural = authors.length > 1 ? "s" : "";
    return `
    <div class='bookCard'>
        <div class="bookCard__headContainer"> 
            <div class="bookCard__imgContainer">
                <img class='bookCard__image' src="${imgSrc}"/>
            </div>
            <h3 class="bookCard__title">${title}</h3>
            <h3 class="bookCard__author">by ${authors.join(", ")}</h3>
        </div>
        <h3 class="bookCard__descHeading">Description:</h3>
        <p class="bookCard__description">${description}</p>
    </div>`;
};
