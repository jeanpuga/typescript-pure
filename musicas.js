"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
class Musicas {
    pah() {
        let options = {
            url: this.url(),
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return new Promise((resolve, reject) => {
            request(options, response => {
                console.log(response);
                resolve([...response.querySelectorAll('strong')]
                    .map(e => e.textContent));
            });
        });
    }
    url() {
        return 'http://ultimateclassicrock.com/top-100-classic-rock-songs/';
    }
}
exports.Musicas = Musicas;
//# sourceMappingURL=musicas.js.map