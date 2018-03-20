import { Musicas } from "./musicas";
import * as chalk from 'chalk'


class Startup {
     main(): number {
        
        let getter :any =  new Musicas();

        getter.pah().then((saida) => {
            console.log(saida)  
        });
            
        return 0;
    }



}
let a = new Startup();
a.main();