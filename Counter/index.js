const instagram = () => {
    count = 0;
    let instaCount = document.getElementById('instagram-counter').innerHTML;

    let insta = setInterval(() => {
        count++;
        
        document.getElementById('instagram-counter').innerHTML = count;
        if (count == instaCount){
            clearInterval(insta);
        }
    }, 10);
}

const linkedin = () => {
    count = 0;
    let linkedinCount = document.getElementById('linkedin-counter').innerHTML;

    let linkedin = setInterval(() => {
        count++;
        document.getElementById('linkedin-counter').innerHTML = count;
        if (count == linkedinCount){
            clearInterval(linkedin);
        }
    }, 10);
}

const twitter = () => {
    count = 0;
    let twitterCount = document.getElementById('twitter-counter').innerHTML;

    let twitter = setInterval(() => {
        count++;
        document.getElementById('twitter-counter').innerHTML = count;
        if (count == twitterCount){
            clearInterval(twitter);
        }
    }, 10);
}

instagram();
linkedin();
twitter();
