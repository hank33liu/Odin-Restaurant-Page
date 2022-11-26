console.log('Main is working!')
import './style.css';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = "Mama Mia's!!!!!!!!!"
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());