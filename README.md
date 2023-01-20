## Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](./screenshot/)

Screenshot folder contain three screenshoot:

1) Screenshot of the desktop design;
2) Screenshot of the active desktop design;
3) Screenshot of the mobile design;

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- CSS variable
- JavaScript


### What I learned

The HTML code was pretty basic with a main container divided in two section;
  1) the img section:

  ```html
  <section class="images-container">
      <div class="main-image-container">
        /*main img*/
        /*shadow img*/
      </div>
      
      <img class="block-image" src="images/illustration-box-desktop.svg" alt="a square box with the @ mark">
    
  </section>
  ```
  2) The Text section:
  ```html
  <section class="text-container">
      <h1>FAQ</h1>
      <ul>
        <li>Question and answer.
      </ul>
  </section>
  ```


I decide to add the arrow icon at the end of the question using the ::after attribute and animate it with the transform property:

```css
  h3::after {
    content: url(images/icon-arrow-down.svg);
    float: right;
    transition: transform 1.5s;
}

  .show h3::after {
    transform: rotate(180deg);
    transition: transform 1.5s;
}
```

Place the img in the right place taking care of the overflow was pretty challenging but i managed it using some basic CSS rules.

```css
.main-illustration {
        position: relative;
        display: grid;
        top: -6rem;
    }
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

The Javascript part was pretty basic and use few Selector and a click event.
I then make sure that no other li element has the show class before toggle on the clicked element. 

```js
  questions.forEach(question => { 
    question.addEventListener('click', (e) => {
        const clicked = e.target.closest('li');
        questions.forEach(element => {
            if(element.classList.contains("show") && element != clicked)
            {
                element.classList.remove("show");
            }
        })
        clicked.classList.toggle("show");

    })   
});
```

### Continued development


Place the picture in the right place was pretty challenging especialy for the Desktop design.
In the future i would like to focusing more on the element positioning.

### Useful resources

- [Building an accordion with HTML, CSS & JS (Part 1)](https://www.youtube.com/watch?v=FboXxLxg8eo&t=3721s&ab_channel=CoderCoder) - This video tutorial helped me especially to have an idea behind of the programmer mind set; explaining how to face the new challange using the dev tools to examinate others web developer code.

- [The HTML picture element explained](https://www.youtube.com/watch?v=Rik3gHT24AM&ab_channel=KevinPowell) - This video from Kevin Powell teach me how to use picture element combine with the media tag in order to display different img based on the viewport size. 

- [Creating an Accordion | HTML, CSS, JavaScript | Tutorial](https://www.youtube.com/watch?v=4w2bcqb25VQ&t=809s&ab_channel=HeyItzaMi) - Quick video that explain me deeply how to built an accordation 

## Author

- GitHub - [@Roveri91](https://github.com/Roveri91)
- Frontend Mentor - [@Roveri91](https://www.frontendmentor.io/profile/Roveri91)
