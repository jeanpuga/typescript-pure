import * as request from 'request';



export  class Musicas{

    pah(): Promise<string[]> {
        let options : any = {
            url: this.url(),
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        return new Promise((resolve, reject) => {
            request(
                options,
                response => {
                    console.log(response);
                    resolve(
                        [...response.querySelectorAll('strong')]
                        .map(e=>e.textContent)
                    )
                }
                
            )
        });    
    }


    private url() {
        return 'http://ultimateclassicrock.com/top-100-classic-rock-songs/';
    }
}