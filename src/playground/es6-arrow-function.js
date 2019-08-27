//arrow function => adalah penyederhanaan dari penulisan sebuah function34

// semua function square ini mempunyai fungsi yang sama
function square1(x){
    return x * x;
};

const square2 = function (x){
    return x * x;
};

const squareArrow = (x) => {
    return x*x;
}

const squareArrow2 = (x) => x * x;



console.log(squareArrow2(11));

//program mengambil nama pertama

//regular arrow function syntax
const getNamaPertama = (namaPenuh) => {
    return namaPenuh.split(' ')[0];
}

console.log(getNamaPertama('aris winandi'));

//short arrow function syntax
const getNamaPertama2 = (namaPenuh) => namaPenuh.split(' ')[1];
console.log(getNamaPertama2('Palupi Maetasari'));