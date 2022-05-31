var pool = require('./bd');

async function getNews() {
    var query = 'select * from news';
    var rows = await pool.query(query);
    return rows;
}

async function deleteNewsById(id) {
    var query = 'delete from news where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

module.exports = { getNews, deleteNewsById }