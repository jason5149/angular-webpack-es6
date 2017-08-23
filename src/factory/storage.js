export default class Storage {
    constructor() {
        if (!storageAvailable('localStorage')) {
            return;
        }

        this.setLocal();
        this.getLocal();
        this.removeLocal();
        this.setSession();
        this.getSession();
        this.removeSession();
    }

    setLocal(key, value) {
        if (!key) {
            throw new Error('set localStorage key is missing!');
        }

        window.localStorage.setItem(key, JSON.stringify(value));
    }

    getLocal(key) {
        if (!key) {
            throw new Error('get localStorage key is missing!');
        }

        return window.localStorage.getItem(key);
    }

    removeLocal(key) {
        if (!key) {
            throw new Error('remove localStorage key is missing!');
        }

        window.localStorage.removeItem(key);
    }

    setSession(key, value) {
        if (!key) {
            throw new Error('set sessionStorage key is missing!');
        }

        window.sessionStorage.setItem(key, JSON.stringify(value));
    }

    getSession(key) {
        if (!key) {
            throw new Error('get sessionStorage key is missing!');
        }

        return window.sessionStorage.getItem(key);
    }

    removeSession(key) {
        if (!key) {
            throw new Error('remove sessionStorage key is missing!');
        }

        window.sessionStorage.removeItem(key);
    }

    removeAll() {
        window.localStorage.clear();
        window.sessionStorage.clear();
    }
}

const storageAvailable = (type) => {
    try {
        let storage = window[type];
        let x = '_storage_test_';

        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (error) {
        throw new Error('this browser isn\'t support localStorage and sessionStorage, please upgrade your browser tool!');
    }
}