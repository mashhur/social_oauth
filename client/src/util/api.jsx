import axios from 'axios';

export function xmlHttpGet(data, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        if (this.readyState == XMLHttpRequest.DONE) {
            callback(xhttp);
        }
    };
    xhttp.open("GET", data, true);
    xhttp.send();
}

export function getAPI(data, callback) {
    axios.get(data)
        .then(function (response) {
            callback(response);
        })
        .catch(function (error) {
            console.log(error);
            if(error.message != undefined && error.message == "Network Error") {
                //window.location.reload(true);
                alert(error.response);
                return;
            }
            callback(error.response);
        });
}

export function postAPI(url, token, body, callback) {

    var headers = {
        'Content-Type': 'application/json',
        'Authorization': token
    };

    axios.post(url, body, headers)
        .then(function (response) {
            callback(response);
        })
        .catch(function (error) {
            console.log(error);
            // network error or logout state catch
            if(error.message != undefined && error.message == "Network Error") {
                window.location.reload(true);
            }
            callback(error.response);
        });
}