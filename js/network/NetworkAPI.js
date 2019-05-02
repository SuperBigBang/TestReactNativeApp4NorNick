import {setMainActivityModelData} from "../model/MainActivityModel";

function getDataFromServer() {
    //processing...
    let successResponse = false; //no connection

    setMainActivityModelData(
        successResponse ? ("Доброе утро/Добрый день") : ("Привет!"),
        successResponse ? ("01.04.2019/03.05.2019") : ("нет ответа от сервера"),
        successResponse ? (
                {
                    imagePath: "https://github.com/SuperBigBang/TestReactNativeApp4NorNick/blob/master/js/resources/localTestResources/april.png?raw=true",
                    imageWidth: 150,
                    imageHeight: 150
                })
            : ({
                imagePath: "https://github.com/SuperBigBang/TestReactNativeApp4NorNick/blob/master/js/resources/noconnection.png?raw=true",
                imageWidth: 104,
                imageHeight: 77
            })
    )
}

export {getDataFromServer}
