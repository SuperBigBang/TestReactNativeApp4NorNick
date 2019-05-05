import {changeLoadingStateOfMainActivity} from "../controller/MainActivityController";
import {setMainActivityModelData} from "../model/MainActivityModel";

function getDataFromServer() {
    let successResponse = false;
    let dataSource = null;
    URL = "http://10.0.2.2:3000"; //for local test on android virtual device
    let URLNET = "https://wonderful-donkey-35.localtunnel.me"; //for test with real device (change to actual url)
    //processing...
    fetch(URLNET, { //set URL first!
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json())
        .then((responseJson) => {
            dataSource = responseJson;
            successResponse = true;
            setMainActivityModelData(
                dataSource.welcomeText,
                dataSource.date,
                {
                    imagePath: URLNET + dataSource.imageUri, //set URL first!
                    imageWidth: 150,
                    imageHeight: 150
                },
                successResponse);
            changeLoadingStateOfMainActivity();
        })
        .catch((error) => {
            console.error(error);
            successResponse = false;
            setMainActivityModelData(
                "Привет!",
                "нет ответа от сервера",
                {
                    imagePath: "https://github.com/SuperBigBang/TestReactNativeApp4NorNick/blob/master/js/resources/noconnection.png?raw=true",
                    imageWidth: 104,
                    imageHeight: 77
                },
                successResponse
            );
            changeLoadingStateOfMainActivity();
        });
}

export {getDataFromServer}
