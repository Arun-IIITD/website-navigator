const XLSX = require("xlsx");
const fs = require("fs");

const parseFile = async (filePath) => {
  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(sheet);

  fs.unlinkSync(filePath); 

  
  const urls = data.map(row => row.url).filter(Boolean);

  return urls;
};

module.exports = { parseFile };