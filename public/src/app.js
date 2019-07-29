//npxi babel public/src/app.js --out-file=public/scripts/app.js --presets=@babel/env,@babel/react --watch

class IndecisionApp extends React.Component{
    //#ini adalah state
        //mengganti props 'options' menjadi state, karena variabel ini mengalami perubahan secara dinamis
        constructor(props){
            super(props)
                this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
                this.handleDeleteOption = this.handleDeleteOption.bind(this)
                this.handlePick = this.handlePick.bind(this)
                this.handleAddOption = this.handleAddOption.bind(this)
                this.state = {
                    options : []
                
            };
        }
//=============================================================================== 
//LifeCycle Method---------------------
componentDidMount(){
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

componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length){
        const json = JSON.stringify(this.state.options)
        localStorage.setItem('options', json)
    }
    //console.log('component did update')
}

componentWillUnmount(){
    console.log('component will unmount')
}
//#==Prop Fungsi action dari tombol pick->mengambil data dari array lalu ditampilkan satu persatu secara acak
    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        //const a = this.state.options;
    alert(option);
    }
//#-------------end--------------------------------------------------------



//#==Props Fungsi -> penambahan option
    handleAddOption(option){

        //kondisi jika input tidak terisi/kosong
        if(!option){
            return ('please enter valid value');
        //kondisi jika data yg diinput sama/ tidak unique
        } else if (this.state.options.indexOf(option) > -1){
            return ('this value already exist')
        }
        //console.log(option);

    //merubah nilai state options, menampung data option->array akan bertambah
            // this.setState((prevState)=>{
            //     return{
            //         options : prevState.options.concat(option)
            //     }
            // })

    this.setState(
        (prevState)=>({
            options:prevState.options.concat(option)
        })
    )

    
    }
//#--------------end-------------------------------------



//#==Props Fungsi menghapus semua input option-> merubah state awal menjadi kosong
    handleDeleteOptions(){
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
     handleDeleteOption(optionToRemove){
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
        const title = 'Indecision App 1';
        const subtitle = 'ini adlaah subtitlekui';
        //const options = ['satu','dua','tiga'];
        
        //Deklarasi component2 yang ingin ditampilkan=========
        //setiap component mempunyai deklarasi props, mengambil dr variabel diatas
        //deklarasi props ini yg kemudian diambil sbg variabel dan diolah oleh  backend/class masing2 component

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Actions 
                    hasOptions = {this.state.options.length > 0}
                    handlePick = {this.handlePick}   
                />             
                <Options
                    options={this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                />
                
                <AddOption
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        )
    }
//=====================RENDER END========================================================
}



//COMPONENT - backend

//============Komponen: <Header/> ======================================
// class Header extends React.Component{
//     render() {
//         return (
//         <div>
//             <h1>{this.props.title}</h1>
//             <p>{this.props.subtitle}</p>

//         </div>
//         ) 
    
//     }
// }

const Header = (props)=>{
    return (
        <div>
            <h1>{props.title}</h1>
              <p>{props.subtitle}</p>
        </div>
    )
}
//----------------header end------------------------------

Header.defaultProps = {
    title : 'Indecision App'
}

//===========Komponen: <Actions/> ========================================
    // class Actions extends React.Component{
    //     render(){
    //         return (
    //             <div>
    //                 <button 
    //                 onClick={this.props.handlePick} //Mengambil Action dari props handlepick
    //                 disabled={!this.props.hasOptions} //terdisabled jika hasOptions tidak terpenuhi/ >0, / jika array kosong
    //                 > ini adlah tombol</button>
                    
    //             </div>
    //         );
    //     }
    
    // }

const Actions = (props)=>{
    return(
        <div>
            <button 
                onClick={props.handlePick} //Mengambil Action dari props handlepick
                disabled={!props.hasOptions} //terdisabled jika hasOptions tidak terpenuhi/ >0, / jika array kosong
                > ini adlah tombol</button>
        </div>
    )
}
//----------------actions end------------------------------




//===========Komponen: <Options/> ========================================
//Komponen function base
const Options = (props)=>{
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>remove all</button>
            {props.options.length===0 && <p>please add some option</p>}
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                        
                    />
                    )
                )
            }
        </div>
    )
        
    
}
        //-------------Komponen Class Base------------
            // class Options extends React.Component{
                    
            //     render(){
            //        return (
            //         //tombol Remove All
            //         <div>
            //             <button onClick={this.props.handleDeleteOptions}>remove all</button>
            //             {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
            //         </div>
            //        ); 
            //     }
            // }
//----------------options end------------------------------



//===========Komponen: <Option/> ========================================
//component function base
const Option = (props) => {
    return(
        <div>
            {props.optionText}
            <button 
                onClick={
                    (e)=>{
                        props.handleDeleteOption(props.optionText)
                    }
                }
                    
            >
            Remove</button>

        </div>
    )
}

            //Component Class base
                // class Option extends React.Component{
                //     render(){
                //         return(
                //             <div>
                //                 {this.props.optionText}
                //             </div>
                //         )
                //     }
                // }
//----------------options end------------------------------



//===========Komponen: <AddOption/> ========================================
class AddOption extends React.Component{
constructor(){
    super()
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
        error : undefined
    }
}
    handleAddOption(e){
        e.preventDefault();

   const option = e.target.elements.option.value.trim();
   const error = this.props.handleAddOption(option);
                //code seState model lama
                    //    this.setState( () => {
                    //        return{
                    //            error : error
                    //         }
                    //    })

   this.setState(()=>({error:error}))
   if(!error){
    e.target.elements.option.value = ''
   }
    }

    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}></p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>SUBMIT</button>
                </form>
            </div>
        )
    }
}
//----------------addoptions end------------------------------




//===================ReactDOM=============================================
ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));