const images = ['bl3.jpg', 'z.jpg', 'bll.jpg']; // Add your image URLs here
let currentIndex = 0;

function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length; // Cycle through images
    document.getElementById('background-slider').style.backgroundImage = `url(${images[currentIndex]})`;
}

setInterval(changeBackground, 3000); // Change image every 3 seconds
document.addEventListener("DOMContentLoaded", function () {
    const title = document.getElementById("animated-title");
    const text = title.textContent;
    title.textContent = ""; // Clear the original text

    let index = 0;
    const speed = 150; // Time delay between each letter in milliseconds
    const typingSound = new Audio('path/to/your/typing-sound.mp3'); // Add the path to your typing sound

    function typeLetter() {
        if (index < text.length) {
            title.textContent += text.charAt(index);
            typingSound.currentTime = 0; // Rewind sound to start
            typingSound.play(); // Play typing sound
            index++;
            setTimeout(typeLetter, speed);
        } else {
            setTimeout(clearText, 2000); // Wait for 2 seconds after finishing typing
        }
    }

    function clearText() {
        title.textContent = ""; // Clear the text
        index = 0; // Reset index
        setTimeout(typeLetter, 500); // Wait for half a second before starting again
    }

    typeLetter(); // Start the typing effect
});

