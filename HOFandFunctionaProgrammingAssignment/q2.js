function generateRandomWithDelay() {
    console.log(`Generating random number in 3 seconds...`);

    let remaining = 3;

    const countdownInterval = setInterval(() => {
        console.log(`Time remaining: ${remaining} seconds`);
        remaining--;

        if (remaining < 0) {
            clearInterval(countdownInterval);
            console.log("Generating random number now...");

            const randomNum = Math.floor(Math.random() * 10) ;  
            console.log(`Generated random number: ${randomNum}`);
        }
    }, 1000);
}


generateRandomWithDelay();
