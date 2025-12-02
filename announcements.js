document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.announcement-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            alert('You clicked on: ' + this.querySelector('h2').innerText);
        });
    });
});
 