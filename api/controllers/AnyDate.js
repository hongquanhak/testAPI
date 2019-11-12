'use strict';

const db = require('../database');

module.exports = {
    get: (req, res) => {
        let sql = `SELECT * FROM get_api WHERE DATE(time) = DATE('2019-11-01')`;
        db.query(sql, (err, response) => {
            if(err) throw err;
            res.status(200);
            res.json(response)
        })
    }
}
