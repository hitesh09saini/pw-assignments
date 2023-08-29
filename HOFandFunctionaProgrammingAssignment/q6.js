const linkedInRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_\-]{5,30}[a-zA-Z0-9]\/?$/;
function checkLinkedInURL(url) {
    if (linkedInRegex.test(url)) {
        console.log(`${url} is a valid LinkedIn profile URL.`);
    } else {
        console.log(`${url} is not a valid LinkedIn profile URL.`);
    }
}

checkLinkedInURL('https://www.linkedin.com/in/hitesh-saini09/');