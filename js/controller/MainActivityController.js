import {changeState} from "../MainActivity";
import {getDateText, getImage, getWelcomeText} from "../model/MainActivityModel";
import {getDataFromServer} from "../network/NetworkAPI";

function getDataFromNetworkAPI() {
    getDataFromServer();
}

function getWelcomeTextFromModel() {
    return getWelcomeText();
}

function getDateTextFromModel() {
    return getDateText();
}

function getImageFromModel() {
    return getImage();
}

function changeLoadingStateOfMainActivity() {
    changeState();
}

export {
    getDataFromNetworkAPI,
    getWelcomeTextFromModel,
    getDateTextFromModel,
    getImageFromModel,
    changeLoadingStateOfMainActivity
};
