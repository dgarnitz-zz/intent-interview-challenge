//Display correct cart and cart total
window.addEventListener("load", event => {
    getCartTotal();
    generateShoppingCart();
})

//get shopping cart's total
function getCartTotal() {
    fetch('/cartTotal')
    .then((response) => {
        return response.text()
    })
    .then((total) => {
        let priceDisplay = document.getElementsByClassName("cart-display");
        priceDisplay[0].textContent = `Cart total is: $${total}`;
    })
}

//generate shopping cart
function generateShoppingCart() {
    fetch('/cartContents')
    .then((response) => {
        return response.json()
    })
    .then((catalogue) => {
        const menu = document.getElementsByClassName("menu");
        for (item of catalogue){
            let menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            let fruit = document.createElement('span');
            fruit.classList.add('fruit');
            fruit.textContent = item.description;
            menuItem.appendChild(fruit)
            let addButton = document.createElement('button');
            addButton.classList.add('add-fruit');
            addButton.name = 'add-fruit';
            addButton.id = item.id;
            addButton.textContent = "Add"
            menuItem.appendChild(addButton)
            let removeButton = document.createElement('button');
            removeButton.classList.add('remove-fruit');
            removeButton.name = 'remove-fruit';
            removeButton.id = item.id;
            removeButton.textContent = "Remove"
            menuItem.appendChild(removeButton)
            menu[0].appendChild(menuItem)
        }
    })
    .then(() => {
        createAddEventHandlers()
    })
    .then(() => {
        createRemoveEventHandlers()
    })
}

//ADD functionality
function createAddEventHandlers() {
    let addButtons = document.getElementsByName("add-fruit");
    for (let add of addButtons){
        add.addEventListener("click", event => {
            add.blur()
            editCart(event.target.name, event.target.id);
        })
    }   
}


//REMOVE functionality
function createRemoveEventHandlers() {
    let removeButtons = document.getElementsByName("remove-fruit");
    for (let remove of removeButtons){
        remove.addEventListener("click", event => {
            remove.blur()
            editCart(event.target.name, event.target.id);
        })
    }
}


//send the request to update the cart
function editCart(buttonClicked, id) {
    const url = `/editCart?id=${id}&add=${buttonClicked==='add-fruit'}`
    fetch(url)
    .then((response) => {
        return response.text()
    })
    .then((price) => {
        let priceDisplay = document.getElementsByClassName("cart-display");
        priceDisplay[0].textContent = `Cart total is: $${price}`;
    });
}

//CLEAR CART functionality
let clearCart = document.getElementsByClassName("clear-cart");
clearCart[0].addEventListener("click", event => {
    clearCart[0].blur()
    fetch('/clearCart')
    .then((response) => {
        return response.text()
    })
    .then((price) => {
        let priceDisplay = document.getElementsByClassName("cart-display");
        priceDisplay[0].textContent = `Cart total is: $${price}`;
    });
})

