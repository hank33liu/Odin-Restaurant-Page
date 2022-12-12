console.log('contact.js is working!')

function component() {
    const contact = document.createElement('div');

    
    contact.innerHTML = `<div class="contact-header">Contact</div>
                    <div class="contact-section">
                        Phone Number: 1.800.MYPIZZA
                        <br>
                        Email: pizza@mamamiaria.com
                    </div>
                    <div class="contact-header">Location</div>
                    <div class="contact-section">
                        325 Pineapple Way
                        <br>
                        Turtleneck Top, Mariana 90210
                    </div>`;
    contact.id = 'contact';

    return contact;
}

export default component;

