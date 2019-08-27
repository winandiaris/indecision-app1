import React from 'react'
import Option from './Option'

//===========Komponen: <Options/> ========================================
//Komponen function base
const Options = (props)=>(
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button className="button button--link"
            onClick={props.handleDeleteOptions}>
                remove all
            </button>
        </div>
        
        {props.options.length===0 && <p className="widget__message">Please add some option to get started!</p>}
        {
            props.options.map((option, index) => (
                <Option 
                    key={option} 
                    optionText={option}
                    count={index + 1}
                    handleDeleteOption={props.handleDeleteOption}
                    
                />
                )
            )
        }
    </div>
)
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
export default Options
