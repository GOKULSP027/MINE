const confettiContainer = document.querySelector('.confetti-container');

// Generate confetti pieces
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
    confetti.style.opacity = Math.random();
    confetti.style.setProperty('--hue', Math.random());
    confettiContainer.appendChild(confetti);

    // Remove confetti after animation
    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

// Generate multiple confetti
function startConfetti() {
    setInterval(createConfetti, 200);
}

startConfetti();
