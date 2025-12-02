document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', function(e) {
        const name = form.querySelector('input[name="name"]').value;
        const message = form.querySelector('textarea[name="message"]').value;

        if(name === "" || message === "") {
            e.preventDefault(); // stop form submit
            alert("Please fill in all fields!");
        }
    });
});
