const { query } = require('./async-db');

async function selecAllData() {
    let sql = 'SELECT * FROM student';
    let dataList = await query(sql);
    return dataList;
}

async function getData() {
    let dataList = await selecAllData();
    console.log(dataList);
}

getData();
