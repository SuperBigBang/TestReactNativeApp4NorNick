let welcomeText;
let dateText;
let image;
let state;

function getWelcomeText() {
    return welcomeText;
}

function getDateText() {
    return dateText;
}

function getImage() {
    return image;
}

function setMainActivityModelData(welcome, date, img, status) {
    welcomeText = welcome;
    dateText = date;
    image = img;
    state = status;
}

export {getWelcomeText, getDateText, getImage, setMainActivityModelData}

