import React from 'react'


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

const Header = (props)=>(
    <div className='header'>
        <div className='container'>
            <h1 className='header__title'>{props.title}</h1>
            {props.subtitle && <h2 className='header__subtitle'>{props.subtitle}</h2>}
        </div>
    </div>
)
//----------------header end------------------------------
export default Header