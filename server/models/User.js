const pool = require("../helpers/database");
const db = require ("../helpers/database");

let helper;
helper.emptyOrRows = function (rows) {
    return undefined;
}

async function getAllNames() {
    const rows = await db.query(`SELECT * FROM user`);
    const data = helper.emptyOrRows(rows);
    const result = data.rows;

    return {
        result
    };
}

module.exports = {
    getAllNames,

};

