# Frontend Mentor - Four card feature section solution

This is a solution to the [Four card feature section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Screenshot

![Screenshot](images/Screenshot%202024-07-08%2011.13.24%20AM.png)

### Links

- Solution URL: [Github](https://github.com/Anjie-MF/FEM-fourCardFeature)
- Live Site URL: [Look at me!](https://anjie-mf.github.io/FEM-fourCardFeature/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- Vanilla JS

### What I learned

After diving deep into CSS grid for a week, I solidified my understanding. That code snippet not only reinforced my grasp of grid but also gave me a fresh appreciation for the power of flexbox in working with CSS layouts.

I'm continuing to expand my knowledge of JavaScript through Skillcrush. This project marks a significant milestone for me – it's the first time I've implemented JavaScript outside of a step-by-step tutorial, demonstrating my growing confidence and ability to apply concepts independently.🎉

```html
<h1>Some CSS & JS code I'm proud of</h1>
```
```css
 grid-template-areas:
            "col1 mid1 col3"
            "col1 mid2 col3";
```
```js
let supervisorSection = document.getElementById("supervisor-section");
supervisorSection.style.transition = "transform 0.5s!important";
supervisorSection.addEventListener("mouseover", function () {
    supervisorSection.style.transform = "scale(1.3)";
});
supervisorSection.addEventListener("mouseout", function () {
    supervisorSection.style.transform = "scale(1)";
});
```

### Continued development

In my continued development, I aim to solidify my skills by working on personal projects that incorporate CSS Grid. 

From this FEM project and onwards, I will add a sprink of JS so I'm reinforcing what I am learning from the [Skillcrush](https://skillcrush.com/) coding camp.  



### Useful resources

Getting started with CSS Grid is overwhelming at first. To make the learning process smoother, I've compiled a list of resources that cater to different learning styles:

- [Sarah_Edo CSS Grid Generator](https://cssgrid-generator.netlify.app/) -This interactive playground allows you to visualize CSS Grid concepts in real-time, making them more intuitive to grasp. I'd recommend it to anyone who NEEDS the visual to understand the abstract.
- [CSS Grid Garden](https://cssgridgarden.com/) - Get your hands dirty with CSS Grid! This website offers a playful environment to experiment with different grid layouts and solidify your understanding.
- [CSS-tricks](https://css-tricks.com/snippets/css/complete-guide-grid/) -This comprehensive guide by CSS-tricks delves deep into the intricacies of CSS Grid, providing a solid foundation for advanced use cases.

Pro Tip:  For a more efficient learning experience, consider starting with the playground or garden to gain a basic understanding, followed by the in-depth guide for a more detailed dive.
## Author

- Frontend Mentor - [@Anjie-MF](https://www.frontendmentor.io/profile/Anjie-MF)
- LinkedIn - [@Anjie M.F.](https://www.linkedin.com/in/anjiemay23/)


## Acknowledgments

- [doggaT] (https://github.com/doggaT/four-card-feature-section/tree/master) - A big thanks to doggaT for their innovative approach to CSS Grid layout using creative names for grid areas.  This technique significantly simplifies managing complex layouts and was a key factor in helping me grasp the power of CSS Grid.This approach simplifies managing complex layouts, making it much easier than relying on numeric positioning. 

- [Stack Overflow](https://stackoverflow.com/questions/67989212/how-to-set-the-icons-to-the-bottom-of-each-card-that-must-be-present-inside-the)- This resource was helpful in understanding how to manipulate font icons effectively, particularly for positioning them at the bottom of cards using CSS.
