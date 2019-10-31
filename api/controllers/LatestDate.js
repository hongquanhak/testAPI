'use strict';
const db = require('../database')

module.exports = {
    get: (req, res) => {
        let sql = `SELECT * FROM get_api WHERE time IN(SELECT max(time) FROM get_api)`
        db.query(sql, (err, response) => {
            if (err) throw err
            res.status(200);
            res.json(response)
        })
    },
}