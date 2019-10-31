// 'use strict'

const https = require('https')
const db = require('./../database')
const parseString = require('xml2js').parseString //convert XML to JSON

//create function to get API and insert into database
module.exports = {
    get: (req, res) => {
        const url = "https://www.ecb.europa.eu/stats/eurofxref/eurofxref-hist-90d.xml";
        https.get(url, (resp) => {
            let data = '';
            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                data += chunk;
            })
            // The whole response has bedeen received. Print out the result.
            resp.on('end', () => {
                parseString(data, function (err, result) {
                    // console.log(JSON.stringify(result));
                    const arr = (result['gesmes:Envelope']['Cube'][0]['Cube']);
                    // let _arr = [];
                    arr.forEach(element => {
                        let date = element['$'];
                        element.Cube.forEach(item => {
                            // console.log(date.time, item);
                            let value = item['$'];
                            // console.log(date.time, value.currency, value.rate);
                            let cube = {
                                time: date.time,
                                currency: value.currency,
                                rate: value.rate
                            }
                            // _arr.push(cube)
                            let sql = 'INSERT INTO get_api SET ?';
                            db.query(sql, cube, function (error, results, fields) {
                                if (error) throw error;
                                // Neat!
                            });
                        })
                    });
                });
            });
        }).on('error', (err) => {
            console.log("Error: " + err.message);
        });
    }
}



