"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const musicas_1 = require("./musicas");
class Startup {
    main() {
        let getter = new musicas_1.Musicas();
        getter.pah().then((saida) => {
            console.log(saida);
        });
        return 0;
    }
}
let a = new Startup();
a.main();
//# sourceMappingURL=main.js.map