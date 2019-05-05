import {changeLoadingStateOfMainActivity} from "../controller/MainActivityController";
import {setMainActivityModelData} from "../model/MainActivityModel";

function getDataFromServer() {
    let successResponse = false;
    let dataSource = null;
    URL = "http://10.0.2.2:3000"; //for local test on android virtual device
    let URLNET = "https://serious-seahorse-16.localtunnel.me/"; //for test with real device (change to actual url)
    //processing...
    fetch(URL, { //set URL first!
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.welcomeText == null) {
                throw {
                    code: 'SERVER_CONNECTION_PROBLEM',
                    message: responseJson.toString()
                }
            }
            dataSource = responseJson;
            successResponse = true;
            setMainActivityModelData(
                dataSource.welcomeText,
                dataSource.date,
                {
                    imagePath: URL + dataSource.imageUri, //set URL first!
                    imageWidth: 150,
                    imageHeight: 150
                },
                successResponse);
            changeLoadingStateOfMainActivity();
        })
        .catch((error) => {
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
            //if there was a problem with server
            try {
                if (navigator && navigator.onLine || error.message === "404") {
                    throw {
                        code: 'SERVER_CONNECTION_PROBLEM',
                        message: 'Проблема подключения к серверу, нет ответа...'
                    }
                } else { // if there is a problem with internet
                    throw {
                        code: 'INTERNET_CONNECTION_ERROR',
                        message: 'Проблема с интернет подключением, возможно включен автономный режим...'
                    }
                }
            } catch (e) {
                alert(e.message + "\nОшибка: " + error.message)
            }
        });
}

export {getDataFromServer}
