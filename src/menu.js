console.log('menu.js is working!')

function component() {
    const menu = document.createElement('div');

    
    menu.setHTML(`  <div class="menu-header">Starters</div>
                    <div class="menu-section">
                        <div class="menu-item">Caesar Salad</div>
                        <div class="menu-item">Garlic Bread</div>
                        <div class="menu-item">Truffle French Fries</div>
                        <div class="menu-item">Antipasto</div>
                    </div>
                    <div class="menu-header">Specials</div>
                    <div class="menu-section">
                        <div class="menu-item">Pizza (pepperoni, four-cheese, sausage and mushroom)</div>
                        <div class="menu-item">Chicken Alfredo</div>
                        <div class="menu-item">Spaghetti and Meatballs</div>
                        <div class="menu-item">Lasagna</div>
                    </div>
                    <div class="menu-header">Desserts</div>
                    <div class="menu-section">
                        <div class="menu-item">Gelato (vanilla, chocolate, strawberry)</div>
                        <div class="menu-item">Tiramisu</div>
                        <div class="menu-item">Cheesecake</div>
                    </div>`);
    menu.id = 'menu';

    return menu;
}

export default component;

