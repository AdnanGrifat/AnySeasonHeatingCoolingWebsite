
function addToCart(item) {
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    cart.push(item);
    sessionStorage.setItem('cart', JSON.stringify(cart));
    alert(item + " added to cart!");
}

function viewCart() {
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    alert("Items in Cart: " + cart.join(", "));
}

document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    localStorage.setItem('contactSubmission', JSON.stringify({name, email, message}));
    alert('Thank you for contacting us!');
});
