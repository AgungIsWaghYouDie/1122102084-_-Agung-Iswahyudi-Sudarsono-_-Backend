const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1) {
    const rows = await db.query(
        `SELECT id, nama, nisn, kelas FROM siswa`
    );
    const data = helper.CekRow(rows);
    return data
    
}
module.exports = {getMultiple,};