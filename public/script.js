//ADD functionality
let addButtons = document.getElementsByName("add-fruit");
for (let add of addButtons){
    add.addEventListener("click", event => {
        add.blur()
        editCart(event.target.name, event.target.id);
    })
}

//REMOVE functionality
let removeButtons = document.getElementsByName("remove-fruit");
for (let remove of removeButtons){
    remove.addEventListener("click", event => {
        remove.blur()
        editCart(event.target.name, event.target.id);
    })
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

//Display correct cart total
window.addEventListener("load", event => {
    fetch('/cartTotal')
    .then((response) => {
        return response.text()
    })
    .then((total) => {
        let priceDisplay = document.getElementsByClassName("cart-display");
        priceDisplay[0].textContent = `Cart total is: $${total}`;
    })
})
