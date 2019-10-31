'use strict';
const db = require('../database');

module.exports = {
    get: (req, res) => {

        let sql = `SELECT max(rate), min(rate), avg(rate)
        FROM get_api
        GROUP BY currency;`;
        db.query(sql, (err, response) => {
            if (err) throw (err)
            res.status(200);
            res.json(response)
        })
    }
}