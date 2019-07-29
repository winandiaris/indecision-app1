//ketiga variabel dibawah bisa jalan, variabel akan tampil dengan mengambil value yang paling akhir
var makanan = 'soto';
var makanan = 'rawon';
makanan = 'gule';

console.log(makanan,'makanan');

//hasil error karena dianggap variable kembar, nama variabel harus berbeda
let makanan2 = 'kare';
//let makanan2 = 'sate';
console.log(makanan2,'makanan');

//hasil error karena const tidak bisa dirubah secara langsung
const makanan3 = 'nasi';
const makanan3 = 'nasi uduk';

console.log(makanan3,'makanan3');

//block scoping
const fullname = 'aris winandi';
let firstname;

if (fullname) {
    firstname = fullname.split('')[0];
    console.log(firstname);
}