const penambahan = (a, b) => {
    return a + b;
}

console.log(penambahan(3,4));


//menggunakan => pada Array
//program tempat tinggal
const user = {
    nama : 'aris winandi',
    kota: ['semarang', 'tuban', 'jakarta'],
    cetakTempatTinggal : function (){
        return this.nama + 'tinggal di' + this.kota;
    },

    cetakTempatTinggal2 (){
        return this.kota.map((kotaku)=>this.nama +'tinggal di'+kotaku);
    }
    
    
};

console.log(user.cetakTempatTinggal2());

//program perkalian
const programPerkalian = {
    angka : [10, 20, 30],
    pengali : 3,
    hasilKali : function(){
        return this.angka.map((angkaku)=>angkaku * this.pengali) ;
    }
};

console.log(programPerkalian.hasilKali());