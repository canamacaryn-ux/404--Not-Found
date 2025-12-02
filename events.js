document.addEventListener('DOMContentLoaded', function() {
    const eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.backgroundColor = "#ffdd57"; // highlight on hover
        });
        card.addEventListener('mouseout', function() {
            this.style.backgroundColor = "#fff"; // revert
        });
    });
});
