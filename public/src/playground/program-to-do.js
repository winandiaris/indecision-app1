
//---------------------KUMPULAN FUNGSI DAN VARIABEL---------------------------
//--[ 6 ]--fungsi berisi variabel yang akan diolah
const app = {
    title : 'Aplikasi To-Do List',
    subtitle :'aplikasi untuk anda',
    options : ['pilihan1','pilihan2']
};


//--[ 13 ]--fungsi untuk aksi submit form input, memasukkan hasil input ke array
const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
   if(option){
    app.options.push(option);
    e.target.elements.option.value = '';
    render();

    }
}

//--[ 15 ]--fungsi untuk mengacak urutan array dan menampilkan alert
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
    console.log (randomNum);
}

//--[ 17 ]--fungsi untuk mengosongkan array
const onRemoveAll = () => {
    app.options = [];
    render();
};



//------------------------DATA YANG DI RENDER-------------------------------
//--[ 1 ]--menghubungkan dengan hal. yg ditampilkan yaitu index.html
const appRoot = document.getElementById('app');

const render = () => { //--[ 2 ]--membuat fungsi render, untuk menampilkan isi
    const template = ( //--[ 4 ]--fungsi yang me-wrap semua isi yang akan ditampilkan
        <div>{/*--[ 7 ]--Tag div= me-wrap semua tag html & js yg akan ditampilkan*/}
            <h1>{app.title}</h1> {/*--[ 8 ]--menampilkan title, mengambil nilai dari app()*/}
                {app.subtitle && <p>{app.subtitle}</p>}{/*--[ 9 ]--menampilkan subtitle, mengambil nilai dari app()*/}
                
                
                {/*--[ 10 ]--Mengecek jumlah array pada app.options, jika lebih dari 0
                maka akan tampil 'daftar pilihan', jika =0, maka 'tidak ditemukan'*/}                
                <p>{app.options.length > 0 ? 'Daftar Pilihan' : 'Pilihan Tidak ditemukan'}</p>
                <p>{app.options.length}</p>{/*----------menghitung jumlah objek pada array*/}
                
                 {/*--[ 14 ]--tombol memunculkan alert - ambil dari onMakeDecision()*/}
                <button disabled={false} onClick={onMakeDecision}>Apa yang harus aku lakukan</button>
                
                {/*--[ 16 ]--tombol menghapus semua*/}
                <button onClick={onRemoveAll}>Remove All</button>
                
                {/*--[ 11 ]-------------------------------------------------------
                -membuat ordered list
                -map() berfungsi memetakan isi array pada app.options
                -didalam map() ada option() yg membuat dan menampilkan list item dari isi array
                */}
                <ol>
                    {
                        app.options.map(
                            (option) => {
                                return <li key={option}>{option}</li>
                            }
                        )
                    }
                </ol>


                {/*--[ 12 ]-----------------------------------------------------------
                -membuat Form yg dengan fasilitas 'input' dan 'button'
                -Form submit mengambil dari onFormSubmit()
                */}
                <form onSubmit={onFormSubmit}>
                    <input type="text" name="option"></input>
                    <button>add item</button>
                </form>


        </div>
    );

    ReactDOM.render(template, appRoot); //--[ 5 ]--merender/menampilkan template dan appRoot
};

render(); //--[ 3 ]--memanggil render()