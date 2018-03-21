import { Musicas } from "./musicas";


class Startup {
     main(): number {
        
        let getter :any =  new Musicas();

        getter.pah();

        return 0;
    }



}
let a = new Startup();
a.main();