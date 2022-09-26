const pool = require("../helpers/database");
class User {
    constructor(){
        this.pool = pool;
    }

    async getAllNames() {
        const test = "SELECT * FROM user";
        return this.pool.query(test);
    }
}

const user = new User();
module.exports = user;