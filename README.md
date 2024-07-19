# Frontend Mentor - Blog preview card solution

This is a solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page

### Screenshot

mobile<br>
<img src="https://github.com/DarrickFauvel/fem2407-blog-preview-card-next/blob/main/screenshot-mobile.png?raw=true" width="200" />
<br>
desktop<br>
<img src="https://github.com/DarrickFauvel/fem2407-blog-preview-card-next/blob/main/screenshot-desktop.png?raw=true" width="400" />

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/single-price-grid-component-html-sass-grid-and-vite-bPAyz8cJe](https://www.frontendmentor.io/solutions/single-price-grid-component-html-sass-grid-and-vite-bPAyz8cJe)
- Live Site URL: [https://fem2407-blog-preview-card-next.vercel.app/](https://fem2407-blog-preview-card-next.vercel.app/)

## My process

### Built with

- Mobile-first workflow
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - For styles

### What I learned

I learned how to apply styling based on the parent state using the Tailwind CSS 'group' modifier.

Here's an example:

```html
<div className="group" id="my-card">
  <h2>Big Title</h2>
  <p>lorem ipsum something something...</p>
  <button className="group-hover:bg-green-600">click me</button>
</div>
```

When hovering the mouse over ANY part of the card, the background color of the inner button element will turn green.

### Continued development

I may use an API to render multiple cards in a grid.

### Useful resources

- [Tailwind CSS](https://www.tailwindcss.com) - This helped me learn about the 'group' modifier.

## Author

- Frontend Mentor - [@DarrickFauvel](https://www.frontendmentor.io/profile/DarrickFauvel)
- LinkedIn - [Darrick Fauvel](https://www.linkedin.com/in/darrickfauvel/)
