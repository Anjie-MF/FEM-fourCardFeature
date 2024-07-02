
let supervisorSection = document.getElementById("supervisor-section");
let teamSection = document.getElementById("team-section");
let karmaSection = document.getElementById("karma-section");
let calculatorSection = document.getElementById("calculator-section");


//transition for the divs
supervisorSection.style.transition = "transform 0.5s!important";
teamSection.style.transition = "transform 0.5s!important";
karmaSection.style.transition = "transform 0.5s!important";
calculatorSection.style.transition = "transform 0.5s!important";

//mouseover for divs
supervisorSection.addEventListener("mouseover", function () {
    supervisorSection.style.transform = "scale(1.3)";
});
teamSection.addEventListener("mouseover", function () {
   teamSection.style.transform = "scale(1.3)";
});
karmaSection.addEventListener("mouseover", function () {
    karmaSection.style.transform = "scale(1.3)";
});
calculatorSection.addEventListener("mouseover", function () {
    calculatorSection.style.transform = "scale(1.3)";
});

//mouseout for divs
supervisorSection.addEventListener("mouseout", function () {
    supervisorSection.style.transform = "scale(1)";
});
teamSection.addEventListener("mouseout", function () {
    teamSection.style.transform = "scale(1)";
});
karmaSection.addEventListener("mouseout", function () {
    karmaSection.style.transform = "scale(1)";
});
calculatorSection.addEventListener("mouseout", function () {
    calculatorSection.style.transform = "scale(1)";
});

