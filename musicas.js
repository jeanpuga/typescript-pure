"use strict";
const request_1 = require("request");
class Musicas {
    pah() {
        let options = {
            url: this.url(),
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const request = new request_1.default();
        return request(options, e => JSON.stringify([...e.querySelectorAll('strong')].map(e => e.textContent)));
    }
    url() {
        return 'http://ultimateclassicrock.com/top-100-classic-rock-songs/';
    }
}
exports.Musicas = Musicas;
//# sourceMappingURL=musicas.js.map