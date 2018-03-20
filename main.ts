import { Musicas } from "./musicas";
import * as chalk from 'chalk'


class Startup {
    public static main(): number {
        
        let getter :any =  new Musicas();

        let saida:string =getter.pah();
        

        console.log(  saida )  




        return 0;
    }



}
Startup.main();