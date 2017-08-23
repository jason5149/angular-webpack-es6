import _ from 'lodash';

export default class Util {
    constructor() {

    }

    jsonToUrl(json) {
        if (_.isEmpty(json)) {
            return;
        }

        return Object.keys(json).map((key, index) => {
            if (json[key] !== undefined && json[key] !== null) {
                return key + '=' + encodeURIComponent(json[key]);
            }
        }).join('&');
    }
}