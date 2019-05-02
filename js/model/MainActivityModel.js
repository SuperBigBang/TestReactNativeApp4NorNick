let welcomeText;
let dateText;
let image;

function getWelcomeText() {
    return welcomeText;
}

function getDateText() {
    return dateText;
}

function getImage() {
    return image;
}

function setMainActivityModelData(welcome, date, img) {
    welcomeText = welcome;
    dateText = date;
    image = img;
}

export {getWelcomeText, getDateText, getImage, setMainActivityModelData}

