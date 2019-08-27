class Counter extends React.Component {
    //membuat 3  method, handlePlus, handleMin, handleReset
    //gunakan console log. untuk cetak
    //onClick button
    //buat cunstroctor dan super constructtor untuk bind
    constructor(props){
        super(props);
            this.handlePlus = this.handlePlus.bind(this);
            this.handleMin = this.handleMin.bind(this);
            this.handleReset = this.handleReset.bind(this);
            this.state = {
                count :0
            };
    }
    //PROGRAM counter-example.js
    //======================lifecycle=====================================

    //Agar Nilai local storage tetap tersimpan waktu page di close/refresh
    //mengambil item dari local storage(kondisinya masih dalam bentuk string) dan di refresh hilang
    //merubah/parse string di localSorage kedalam bentuk integer, maksimal 10 digit 
    //jika counting adalah number, maka state count berubah nilainya menjadi counting
    componentDidMount(){
        const stringNum = localStorage.getItem('count',this.state.count)
        const counting = parseInt(stringNum,10)
        if (!isNaN(counting)){
            this.setState(()=>({count:counting}))
        }

    }
    //jika state sebelumnya tidak sama dengan nilai state saat ini,
    //maka local storage di set sesuai dengan nilai state saat ini,
    // menggunakan nama 'count'
    componentDidUpdate(prevProps, prevState){
        if(prevState !== this.state.count){
            localStorage.setItem('count',this.state.count)

        }

    }

    //setState() untuk merubah nilai state
    handlePlus() {
        this.setState( (flow) => {
            return {
                count :flow.count + 1
            }
        })
    }

    handleMin(){
        //State Syntax #1
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })

        //State Syntax #2
        this.setState({
            count : this.state.count -1
        })
           
        
    }

    handleReset(){
        this.setState(() => {
            return{
                count : 0
            }
        })
 
    }

    render(){
        return (
            <div>
                <h1>counter : {this.state.count}</h1>
                <button onClick={this.handlePlus}>+1</button>
                <button onClick={this.handleMin}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}


ReactDOM.render(<Counter count={30} />, document.getElementById('app'));