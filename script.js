function filterEvents(category) {
    const events = document.querySelectorAll('.event');
    events.forEach(event => {
        if (category === 'all' || event.dataset.category === category) {
            event.style.display = 'block';
        } else {
            event.style.display = 'none';
        }
    });
}

function openModal(title, description) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('eventModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('eventModal').style.display = 'none';
}

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').textContent = "Thanks for contacting us!";
    this.reset();
});
document.addEventListener("DOMContentLoaded", () => {
    new Typed("#typed-text", {
        strings: [
            "Welcome to Campus Life",
            "Explore Clubs",
            "Join Amazing Events",
            "Connect with Your Community"
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });
});
