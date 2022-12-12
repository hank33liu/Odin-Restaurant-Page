console.log('index.js is working!');
import './style.css';
import homescript from "./home.js";
import menuscript from "./menu.js";
import contactscript from "./contact.js";

// function component() {
//     const element = document.createElement('div');

//     // 
//     element.innerHTML = "Mama Mia's!!!!!!!!!"
//     element.classList.add('hello');

//     return element;
// }

// document.body.appendChild(component());
function content() {
    const content = document.createElement('div');
    content.id = 'content'

    const header = document.createElement('div');
    header.id = 'header'
    header.textContent = `Mama Mia's!!!`;
    content.appendChild(header);

    const tab_group = document.createElement('div'); 
    tab_group.id = "tab-group";
    const home = document.createElement('div');
    home.classList.add('tab');
    home.id = 'home-tab';
    home.textContent = 'Home';
    const menu = document.createElement('div');
    menu.classList.add('tab');
    menu.id = 'menu-tab';
    menu.textContent = 'Menu';
    const contact = document.createElement('div');
    contact.classList.add('tab');
    contact.id = 'contact-tab';
    contact.textContent = 'Contact';
    tab_group.appendChild(home);
    tab_group.appendChild(menu);
    tab_group.appendChild(contact);
    content.appendChild(tab_group)

    const main = document.createElement('div');
    main.id = 'main';
    content.appendChild(main);

    const fixer = document.createElement('div');
    fixer.id = 'fixer';
    main.appendChild(fixer)

    const credits = document.createElement('div');
    credits.classList.add('credits');
    credits.setHTML('Photo by &nbsp<a href="https://unsplash.com/@pablomerchanm" target="_blank" rel="noopener noreferrer">Pablo Merchán Montes</a>&nbsp on &nbsp<a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">Unsplash</a>');
    main.appendChild(credits);


    const footer = document.createElement('div');
    footer.id = 'footer';
    footer.textContent = 'Last updated December 2022';
    content.appendChild(footer);

    return content;
}

document.body.appendChild(content());
const fixer = document.getElementById('fixer');
fixer.appendChild(homescript());

function clearFixer() {
    fixer.textContent = '';
}

const home = document.getElementById('home-tab');
home.addEventListener('click', clearFixer);
home.addEventListener('click', function() {
    fixer.appendChild(homescript());
})

const menu = document.getElementById('menu-tab');
menu.addEventListener('click', clearFixer);
menu.addEventListener('click', function() {
    fixer.appendChild(menuscript())
});

const contact = document.getElementById('contact-tab');
contact.addEventListener('click', clearFixer);
contact.addEventListener('click', function () {
    fixer.appendChild(contactscript())
});

