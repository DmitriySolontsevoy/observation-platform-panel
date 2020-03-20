export function callApi(url, request, method, callback, authToken) {
    let httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = callback;

    httpRequest.open(method, "http://192.168.1.105:1338/api/" + url, true);
    httpRequest.setRequestHeader('Content-Type', 'application/json');

    if (authToken) {
        httpRequest.setRequestHeader('Authorization', authToken);
    }

    httpRequest.send(request);
}