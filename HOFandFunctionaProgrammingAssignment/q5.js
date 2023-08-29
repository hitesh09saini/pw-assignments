const urlRegex = /^((http:|https:)\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+[a-zA-Z]+$/;

function checkURL(url) {
    if (urlRegex.test(url)) {
        console.log(`${url} is a valid URL.`);
    } else {
        console.log(`${url} is not a valid URL.`);
    }
}

checkURL("http://www.pwSkills.com");