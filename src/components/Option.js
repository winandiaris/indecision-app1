import React from 'react'

//===========Komponen: <Option/> ========================================
//component function base
const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.count}. {props.optionText}</p>
        
        <button
            className="button button--link" 
            onClick={
                (e)=>{
                    props.handleDeleteOption(props.optionText)
                }
            }
                
        >
        Remove</button>

    </div>
)

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
export default Option