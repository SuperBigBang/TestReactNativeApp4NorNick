import {changeLoadingStateOfMainActivity} from "../controller/MainActivityController";
import {setMainActivityModelData} from "../model/MainActivityModel";

function getDataFromServer() {
    let successResponse = false;
    let dataSource = null;
    URL = "http://10.0.2.2:3000";
    //processing...
    fetch(URL)
        .then((response) => response.json())
        .then((responseJson) => {
            dataSource = responseJson;
            successResponse = true;
            setMainActivityModelData(
                dataSource.welcomeText,
                dataSource.date,
                {
                    imagePath: URL + dataSource.imageUri,
                    imageWidth: 150,
                    imageHeight: 150
                },
                successResponse);
            changeLoadingStateOfMainActivity();
        })
        .catch((error) => {
            alert(error);
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
