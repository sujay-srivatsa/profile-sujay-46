document.addEventListener("DOMContentLoaded", function () {
    // Typing Effect for Name
    const typingText = document.getElementById("typing-text");
    const words = ["Sujay Srivatsa M.", "a Web Developer.", "a Designer.", "a Freelancer."];
    let wordIndex = 0;
    let letterIndex = 0;

    function typeEffect() {
        if (letterIndex < words[wordIndex].length) {
            typingText.innerHTML += words[wordIndex][letterIndex];
            letterIndex++;
            setTimeout(typeEffect, 100);
        } else {
            setTimeout(eraseEffect, 2000);
        }
    }

    function eraseEffect() {
        if (letterIndex > 0) {
            typingText.innerHTML = words[wordIndex].substring(0, letterIndex - 1);
            letterIndex--;
            setTimeout(eraseEffect, 50);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 500);
        }
    }

    typeEffect();
});
