const cardExpandOnHover = document.querySelectorAll(".supervisor, .team-builder, .calculator, .karma");

cardExpandOnHover.forEach(card => {
    card.addEventListener("mouseover", function () {
        console.log("Mouse over:", card); // Debugging log
        card.classList.add("expand"); /*this part expands the card; reference css .expand*/
    });
    card.addEventListener("mouseout", function () {
        console.log("Mouse out:", card); // Debugging log
        card.classList.remove("expand"); /*this part returns the cards its original non expanded state*/
    })
});