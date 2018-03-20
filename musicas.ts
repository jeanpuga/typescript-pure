import Request from 'request';



export  class Musicas{

    pah(): string{
        let options : any = {
            url: this.url(),
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const request = new Request();
        return request(options,e=>JSON.stringify([...e.querySelectorAll('strong')].map(e=>e.textContent)))
        ;
    }

    private url() {
        return 'http://ultimateclassicrock.com/top-100-classic-rock-songs/';
    }
}