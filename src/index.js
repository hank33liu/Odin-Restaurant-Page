console.log('index.js is working!')
import './style.css';

function content() {
    //Create content
    const element = document.createElement('div');
    return element;
}

document.body.appendChild(content());