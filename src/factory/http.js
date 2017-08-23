export default class Http {
    constructor($http) {
        console.log($http);

        this.get();
        this.post();
        this.put();
        this.remove();
        this.other();
    }

    get(url, params, headers) {}

    post(url, params, headers) {}

    put(url, params, headers) {}

    remove(url, params, headers) {}

    other(url, params, headers) {}
}