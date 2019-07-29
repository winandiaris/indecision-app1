//membuat class VisibilityToggle
//buat render() didalamnya untuk test
//buat react dom untuk render class
//dalam render(), buat button dg :
    // onClick = HandleVisibilityToggle
    // isi, mengambil state 'visibility', jika true=hide details, false = show details
    //isi visibility dengan visibility && (<div> isi)
//buat method HandleVisibilityToggle, isi alert
//buat constructor, super(), state = visibility false
//jangan lupa this.state untuk mengakses state, terutama di button waktu ngambil visibility
//binding HandleToggleVisibility
//isi HandleToggleVisibility, 
    //membuat updater function dg, setState( func prevState , return{buat variable visibility, nilai ->akses prevState.visibility, dilawan dengan !} )

class VisibilityToggle extends React.Component {
    constructor (props){
        super(props);
        this.HandleVisibilityToggle = this.HandleVisibilityToggle.bind(this);
        this.state = {
            Visibility : false
        };
            
        
    }

    HandleVisibilityToggle(){
        this.setState((prevState)=>{
            return {
                Visibility : !prevState.Visibility
            }
        });
    }
    render () {
        return (
            <div>
                <h1>ini adalah tombol</h1>
            <button onClick = {this.HandleVisibilityToggle}>
                {this.state.Visibility ? 'hide details' : 'show details'}
                
            </button>
            {this.state.Visibility && (
                <div>
                    <p>ini adalah isi dari tombol</p>
                </div> 
            )
                }
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));


// let visibility = false;

// const togleVisibility = () => {
//     visibility = !visibility;
//     render();
// };

// const render = () => {
//     const jsx = (
//         <div>
//             <h1>visibility togle</h1>
//             <button onClick={togleVisibility}>{visibility ?'sembunyikan' : 'perlihatkan'}</button>
//             {visibility && (
//                 <div>
//                     <p>aku tampak jelas</p>
//                 </div>
//             )}
//         </div>
//     );

//     ReactDOM.render(jsx, document.getElementById('app'));
// };
    
// render();