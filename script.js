// Get the button element
const readButton = document.getElementById('readButton');

// Add click event listener to the button
readButton.addEventListener('click', () => {
    // Get the text to be read
    const textToRead = document.querySelector('.container').innerText;

    // Initialize a new SpeechSynthesisUtterance object with the text
    const utterance = new SpeechSynthesisUtterance(textToRead);

    // Use the speech synthesis API to speak the text
    window.speechSynthesis.speak(utterance);
});
