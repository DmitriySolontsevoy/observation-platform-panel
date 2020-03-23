export class APIHandler {

    static callApi(url, request, method, callback, authToken) {
        let httpRequest = new XMLHttpRequest();
    
        httpRequest.onreadystatechange = callback;
    
        let host = localStorage.getItem("host")
        let port = localStorage.getItem("port")

        httpRequest.open(method, `http://${host}:${port}/api/${url}`, true);
        httpRequest.setRequestHeader('Content-Type', 'application/json');
    
        if (authToken) {
            httpRequest.setRequestHeader('Authorization', authToken);
        }
    
        httpRequest.send(request);
    }
}