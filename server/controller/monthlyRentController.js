const collection = require('../db/collection');

function handleRentInfo(params) {
  const date = new Date();
  // 获取当前年
  const year = date.getFullYear();
  // 当前月
  const momth = date.getMonth() + 1;
  const info = {
    year,
    momth,
    water: params.water,
    electricity: params.electricity,
    gas: params.gas,
  }
}