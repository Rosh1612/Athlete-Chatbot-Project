function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

function openChatbot() {
    alert("AI Chatbot integration coming soon.");
}

/* FEEDBACK FORM LOGIC */
document.getElementById("feedbackForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    const rating = document.getElementById("rating").value;

    const stars = "★★★★★☆☆☆☆☆".slice(5 - rating, 10 - rating);

    const reviewCard = document.createElement("div");
    reviewCard.classList.add("review-card");

    reviewCard.innerHTML = `
        <div class="stars">${stars}</div>
        <p>"${message}"</p>
        <strong>- ${name}</strong>
    `;

    document.getElementById("reviewsContainer").appendChild(reviewCard);

    document.getElementById("feedbackForm").reset();
});