import React from 'react'
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

    const Actions = (props)=>(
        <div>
            <button className="big-button"
                onClick={props.handlePick} //Mengambil Action dari props handlepick
                disabled={!props.hasOptions} //terdisabled jika hasOptions tidak terpenuhi/ >0, / jika array kosong
                > What Should i do!!</button>
        </div>
    )
    //----------------actions end------------------------------
    export default Actions