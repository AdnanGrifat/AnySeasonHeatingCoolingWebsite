
document.getElementById('subscribeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('subscribeEmail').value;
    localStorage.setItem('subscriber', email);
    alert('Thank you for subscribing!');
});
