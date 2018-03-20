"use strict";
const musicas_1 = require("./musicas");
class Startup {
    static main() {
        let getter = new musicas_1.Musicas();
        let saida = getter.pah();
        console.log(saida);
        return 0;
    }
}
Startup.main();
//# sourceMappingURL=main.js.map