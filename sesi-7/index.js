const http = require('http');
const rupiah = require('rupiah-format');
const fs = require('fs');
const os = require('os');

const host = '127.0.0.1'
const port = 3002

// request adalah = data masuk dari luar
// response adalah = data keluar dari sistem

const server = http.createServer(function (request, response) {
  const nama = "FIKY ANGGARA";
  let uang = 500000;
  let jajan = 150000;
  let sisa = uang - jajan;
  uang = rupiah.convert(uang)
  jajan = rupiah.convert(jajan)
  sisa = rupiah.convert(sisa)
  
  fs.appendFile('sisauang.txt', sisa, () => {
    console.log('data uang berhasil disimpan')
  });
  
  const sisaRAM = os.freemem();
  const jumlahCPU = os.cpus();
