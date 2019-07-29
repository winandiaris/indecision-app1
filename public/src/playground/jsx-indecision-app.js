console.log('hello world');

//menggunakan function
    //--fungsi alamat
//menggunakan if statement (if...else...)
    //--fungsi alamat: getAlamat(alamatku), kondisi 'alamatku' harus terisi. dalam bentuk apapun. misalnya,dibawah ini mengambil 'dataKaryawan.Alamat' sebagai isi dari kondisi
    //--IF 'alamatku' terpenuhi/terisi maka return/ditampilkan 'alamatku' itu sendiri
    //--ELSE 'alamatku' tidak terpenuhi/kosong, maka return/ditampilkan string 'tidak diketahui'
//menggunakan conditional (ternary) operator
    //--variablename = (condition) ? value1:value2 
    //--templateTwo = dataKaryawan.nama ? dataKaryawan.nama : 'tidak diketahui'
    //--IF 'dataKaryawan.nama' eksis, maka value1= terisi 'dataKaryawan.nama' itu sendiri, dan jika tidak eksis, value2='tidak diketahui'
// menggunakan logical && operator

//template1
//Hanya me render subtitle (dan 'p' tag) jika subtitle eksis - 
//merender p tag baru - jika options.length > 3 (array) maka muncul "ini dia pilihanmu", jika kurang dari itu muncul "ndak ada pilihan"





//JSX - Javascript XML versi git

var app = {
    title : 'Indecision App1',
    subtitle : 'serahkan nyawamu',
    options : ['one','two']
}

//Fungsi untuk mengecek input
const onFormSubmit = (e) => {
   e.preventDefault();

   const option = e.target.elements.option.value;
   if(option){
    app.options.push(option);
    e.target.elements.option.value = '';
    render();

   }
};

const onRemoveAll = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
    console.log (randomNum);
};

//variabel data sumber 'data karyawan'/sumber input data
var dataKaryawan = {
    nama:'aris winandi',
    alamat:'semarang',
    jabatan:'manager',
    usia: 18,
    usiaMax:32
    
};

//program counter manual

//fungsi perhitungan------------------------------------------------------
let hitung = 0;
const penambahan = () => {
    hitung ++;
    renderTemplate4();
};

const pengurangan = () => {
    hitung --;
    renderTemplate4();
    
};

const reset = () => {
    hitung = 0;
    renderTemplate4();
};
//-------------------------------------------------------------------------

//fungsi alamat. ---------------------------------------------------------------
function getAlamat(alamatku) {
    if (alamatku){
        return alamatku;
    }
    else {
        return 'tidak diketahui';
    }
}

function getUsiamax(usiaMaksimal) {
    if ((usiaMaksimal < 18) ||(usiaMaksimal >= 35) ){
        return 'usia tidak memenuhi syarat';
    }
    else{
        return usiaMaksimal
    }

}
//--------------------------------------------------------------------------------
//data yang di render-------------------------------------------------------------
//----------------------------------------------------
const appRoot = document.getElementById('app'); //jangan sampai salah posisi
const render = () => {
    const template1 = (
        <div>
        <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'inilah pilihanmu': 'ndak ada pilihan'}</p>
            <p>{app.options.length}</p>{/*----------menghitung jumlah objek pada array*/}
            <button disabled={false} onClick={onMakeDecision}>Apa yang harus aku lakukan</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                    {app.options.map(
                            (option) => {
                                return <li key={option}>{option}</li>
                            }
                        )
                    
                    }              
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>add Item</button>
            </form>
        </div>
    );

    
    ReactDOM.render(template1, appRoot);//jangan sampai salah posisi
};
render();








