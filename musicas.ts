import * as request from 'request';
import * as cheerio from 'cheerio';



// const request = require('request');
 


export  class Musicas{
    
    //[...document.querySelectorAll('#corpoMateria > p')].map(e=>e.textContent)

       pah(callback) {
        let url:string='https://whiplash.net/materias/melhores/153657.html';

        // request(, null, (err, res) => {
        //     if (err) { return console.log('erro'+err); }

        //     const document = cheerio.load(res);

        //     console.log(document);
        //     //console.log('certo:'+[...res.find('#corpoMateria > p')].map(e=>e.textContent));
        //   });

          request(url, function(error, response, html) {

                var $ = cheerio.load(html);
                [].slice.call($('#corpoMateria > p'),null).map(e=>e.firstChild).map(e=>(0?e.nodeValue:''))
                console.log('Done downloading, encrypting, and saving!');
            });



        
      }

      


      