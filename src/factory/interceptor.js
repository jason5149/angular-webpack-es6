export default class Interceptor {
    constructor($q, $inject) {
        this.request();
        this.requestError();
        this.response();
        this.responseError();
    }

    request(request) {
        if (!request) {
            return;
        }

        console.info('request config:');
        console.info(request);

        return new Promise((resolve, reject) => {
            resolve(request);
        });
    }

    requestError(requestError) {
        if (!requestError) {
            return;
        }

        return new Promise((resolve, reject) => {
            reject(requestError);
        });
    }

    response(response) {
        if (!response) {
            return;
        }

        console.info('response config:');
        console.info(response);

        return new Promise((resolve, reject) => {
            resolve(response);
        });
    }

    responseError(responseError) {
        if (!responseError) {
            return;
        }

        return new Promise((resolve, reject) => {
            reject(responseError);
        })
    }
}