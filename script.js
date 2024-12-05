// function([text array], target element ID, [colors array])
consoleText(['Welcome Back!', 'Enjoy the Experience!'], 'text', ['#ff512f', '#00c6ff']);

function consoleText(words, id, colors) {
    const target = document.getElementById(id);
    const consoleCursor = document.getElementById('console');
    if (!colors || colors.length === 0) colors = ['#fff'];

    let letterCount = 0;
    let wordIndex = 0;
    let isDeleting = false;

    target.style.color = colors[wordIndex];

    function updateText() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            letterCount--;
        } else {
            letterCount++;
        }

        target.textContent = currentWord.substring(0, letterCount);

        if (!isDeleting && letterCount === currentWord.length) {
            isDeleting = true;
            setTimeout(updateText, 1000); // Pause before deleting
        } else if (isDeleting && letterCount === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            target.style.color = colors[wordIndex]; // Update color
            setTimeout(updateText, 500); // Pause before typing next word
        } else {
            setTimeout(updateText, isDeleting ? 80 : 120);
        }
    }

    function blinkCursor() {
        consoleCursor.classList.toggle('hidden');
    }

    setInterval(blinkCursor, 400); // Blink cursor every 400ms
    updateText();

    // Redirect to a link after 3 seconds
    window.setTimeout(function () {
        window.location.href = 'https://my-all-resum.netlify.app/'; // Redirect to another page
    }, 6500);
}