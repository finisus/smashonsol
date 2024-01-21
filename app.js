// Copy button for Contract Address
document.getElementById(`copy_btn`).addEventListener('click', function() {
    const textToCopy = document.getElementById('contract').innerText;

    // create a temporary element to hold the text
    const tempElement = document.createElement('textarea');
    tempElement.value = textToCopy;
    tempElement.setAttribute('readonly', ''); // make it read-only to prevent keyboard from showing on mobile devices
    tempElement.style.position = 'absolute';
    tempElement.style.left = '-9999px'; // move it off-screen
    document.body.appendChild(tempElement);

    // select and copy the text
    tempElement.select();
    tempElement.setSelectionRange(0, 99999);

    // Use the modern Clipboard API to copy the selected text to clipboard
	if (navigator.clipboard) {
		navigator.clipboard.writeText(textToCopy)
		.then(() => {
		// Do something when the text is successfully copied
		console.log('Text copied to clipboard');
        alert('Contract Address copied to clipboard!');
		})
		.catch((err) => {
			// Handle any errors that may occur during the copy process
			console.error('Error copying text to clipboard:', err);
            alert('Failed to copy Contract Address :/');
		});
	} else {
		// Fallback for browsers that do not support the Clipboard API
		document.execCommand('copy');
	}

    // Clean up
	document.body.removeChild(tempElement);
});

// Social Buttons
const telegramBtn = document.getElementById('telegram_btn');
const twitterBtn = document.getElementById('twitter_btn');
telegramBtn.addEventListener('click', function () {
    window.open('https://t.me/smashonsol', '_blank');
});
twitterBtn.addEventListener('click', function () {
    window.open('https://twitter.com/smashonsol', '_blank');
});

// Buy Button
document.getElementById('buy_btn').addEventListener('click', function() {
	window.open('https://raydium.io/swap/?outputCurrency=ZE6BZQSe6U6vvMFFd2VzaJLaGUS6HnjC11bsEnQvurz', '_blank');
});

// Money Bag Background
const lightsContainer = document.querySelector(".lights");
function createLight() {
	const light = document.createElement("img");
	light.classList.add("light");
    light.style.position = "absolute";
	light.style.left = `${getRandomInt(window.innerWidth)}px`;
    light.src = "./metadata/transparent.png";
    light.style.width = "25px";
    light.style.height = "auto";
	lightsContainer.appendChild(light);

	setTimeout(() => {
		light.remove();
	}, 8000);
}
setInterval(() => {
	createLight();
}, 500);
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}
