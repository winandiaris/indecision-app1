import React from 'react'
import AddOption from './AddOptions'
import Options from './Options'
import Actions from './Actions'
import Header from './Header'
import Option from './Option'
import OptionModal from './OptionModal'


export default class IndecisionApp extends React.Component{
    //#ini adalah state
        //mengganti props 'options' menjadi state, karena variabel ini mengalami perubahan secara dinamis
        state = {
            options : [],
            selectedOption : undefined
        
    };
        // constructor(props){
        //     super(props)
        //         this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        //         this.handleDeleteOption = this.handleDeleteOption.bind(this)
        //         this.handlePick = this.handlePick.bind(this)
        //         this.handleAddOption = this.handleAddOption.bind(this)
        //         this.state = {
        //             options : []
                
        //     };
        // }
//=============================================================================== 
//LifeCycle Method---------------------
componentDidMount = () => {
    try{
        const json = localStorage.getItem('options')
        const options = JSON.parse(json)
   
    if (options){
    this.setState(()=>({options}))
   }

    }catch(e){
        //
    }
    
}

componentDidUpdate = (prevProps, prevState) => {
    if(prevState.options.length !== this.state.options.length){
        const json = JSON.stringify(this.state.options)
        localStorage.setItem('options', json)
    }
    //console.log('component did update')
}

componentWillUnmount = () => {
    console.log('component will unmount')
}
//#==Prop Fungsi action dari tombol pick->mengambil data dari array lalu ditampilkan satu persatu secara acak
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        //const a = this.state.options;
    //alert(option);
    this.setState (()=>({
        selectedOption : option

    }))
    }
//#-------------end--------------------------------------------------------

//handle selected option
//Merubah state menjadi undefined
handleClearSelectedOption = () => {
    this.setState(()=>({
        selectedOption : undefined
    }))
}


//#==Props Fungsi -> penambahan option
    handleAddOption = (option) => {

        //kondisi jika input tidak terisi/kosong
        if(!option){
            return ('please enter valid value');
        //kondisi jika data yg diinput sama/ tidak unique
        } else if (this.state.options.indexOf(option) > -1){
            return ('this value already exist')
        }
        //console.log(option);

    // merubah nilai state options, menampung data option->array akan bertambah
    //         this.setState((prevState)=>{
    //             return{
    //                 options : prevState.options.concat(option)
    //             }
    //         })

    this.setState(
        (prevState)=>({
            options:prevState.options.concat(option)
        })
    )

    
    }
//#--------------end-------------------------------------



//#==Props Fungsi menghapus semua input option-> merubah state awal menjadi kosong
    handleDeleteOptions = () => {
                // //code model lama
                    //sebelum
                    // this.setState(()=> {
                    //     return {
                    //         options : []
                    //     }
                    // })

        //baru
        this.setState(() => (
                {options:[]} 
                )
        )
    }
//--------------end-----------------------------

//#==Props Fungsi menghapus per item/individu dari input option
     handleDeleteOption = (optionToRemove) => {
        this.setState(
            (prevState) =>(
                {
                    options:prevState.options.filter((option)=> optionToRemove !== option)
                }))
        //console.log('asd',option)
}    
    
    
//------------------------------------------------------




//##########==========RENDER AREA=============================================
    render(){
        //Ini adalah Props.
        //Deklarasi semua variabel yg akan di gunakan semua class=======
        const title = 'Indecision App';
        const subtitle = 'Aplikasi manajemen masalah';
        //const options = ['satu','dua','tiga'];
        
        //Deklarasi component2 yang ingin ditampilkan=========
        //setiap component mempunyai deklarasi props, mengambil dr variabel diatas
        //deklarasi props ini yg kemudian diambil sbg variabel dan diolah oleh  backend/class masing2 component

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <div className='container'>
                    <Actions 
                        hasOptions = {this.state.options.length > 0}
                        handlePick = {this.handlePick}   
                    /> 

                    <div className= "widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions = {this.handleDeleteOptions}
                            handleDeleteOption = {this.handleDeleteOption}
                        />
                        
                        <AddOption
                            handleAddOption = {this.handleAddOption}
                        />
                    </div>            
                    

                    <OptionModal
                        selectedOption = {this.state.selectedOption}
                        handleClearSelectedOption = {this.handleClearSelectedOption}  
                    />
                </div>
                
            </div>
        )
    }
//=====================RENDER END========================================================
}



//COMPONENT - backend



// Header.defaultProps = {
//     title : 'Indecision App'
// }
















