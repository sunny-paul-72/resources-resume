// function([string1],target id,[color1])
consoleText(['Welcome Back'], 'text', ['tomato']);

function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id);
    target.setAttribute('style', 'color:' + colors[0]);

    var textInterval = window.setInterval(function () {
        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount);
            window.setTimeout(function () {
                var usedColor = colors.shift();
                colors.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0]);
                letterCount += x;
                waiting = false;
            }, 1000);
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function () {
                x = -1;
                letterCount += x;
                waiting = false;
                clearInterval(textInterval); // Stop the interval once animation is complete
                hideTextAndExecuteFile(); // Call the function to hide text and execute the second file
            }, 1000);
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount);
            letterCount += x;
        }
    }, 120);

    window.setInterval(function () {
        if (visible === true) {
            con.className = 'console-underscore hidden';
            visible = false;
        } else {
            con.className = 'console-underscore';
            visible = true;
        }
    }, 400);
}

// Function to hide the "Welcome Back" text and execute the second file
function hideTextAndExecuteFile() {
    // Hide the "Welcome Back" text
    document.getElementById('text').style.display = 'none';
    document.getElementById('console').style.display = 'none';

    // Execute the second file or trigger some action
    // Example: Redirect to another page
    window.setTimeout(function () {
        window.location.href = 'https://my-all-resum.netlify.app/'; // Redirect to another page
    }, 1000); // Wait for 1 second before loading the second file

    // If you want to reload the process automatically after a while, uncomment this line
    // setTimeout(() => { window.location.reload(); }, 5000); // Reload the page after 5 seconds
}