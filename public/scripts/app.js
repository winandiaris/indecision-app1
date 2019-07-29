'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//npxi babel public/src/app.js --out-file=public/scripts/app.js --presets=@babel/env,@babel/react --watch

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    //#ini adalah state
    //mengganti props 'options' menjadi state, karena variabel ini mengalami perubahan secara dinamis
    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.state = {
            options: []

        };
        return _this;
    }
    //=============================================================================== 
    //LifeCycle Method---------------------


    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);

                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {
                //
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
            //console.log('component did update')
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('component will unmount');
        }
        //#==Prop Fungsi action dari tombol pick->mengambil data dari array lalu ditampilkan satu persatu secara acak

    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNum];
            //const a = this.state.options;
            alert(option);
        }
        //#-------------end--------------------------------------------------------


        //#==Props Fungsi -> penambahan option

    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {

            //kondisi jika input tidak terisi/kosong
            if (!option) {
                return 'please enter valid value';
                //kondisi jika data yg diinput sama/ tidak unique
            } else if (this.state.options.indexOf(option) > -1) {
                return 'this value already exist';
            }
            //console.log(option);

            //merubah nilai state options, menampung data option->array akan bertambah
            // this.setState((prevState)=>{
            //     return{
            //         options : prevState.options.concat(option)
            //     }
            // })

            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat(option)
                };
            });
        }
        //#--------------end-------------------------------------


        //#==Props Fungsi menghapus semua input option-> merubah state awal menjadi kosong

    }, {
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            // //code model lama
            //sebelum
            // this.setState(()=> {
            //     return {
            //         options : []
            //     }
            // })

            //baru
            this.setState(function () {
                return { options: [] };
            });
        }
        //--------------end-----------------------------

        //#==Props Fungsi menghapus per item/individu dari input option

    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
            //console.log('asd',option)
        }

        //------------------------------------------------------


        //##########==========RENDER AREA=============================================

    }, {
        key: 'render',
        value: function render() {
            //Ini adalah Props.
            //Deklarasi semua variabel yg akan di gunakan semua class=======
            var title = 'Indecision App 1';
            var subtitle = 'ini adlaah subtitlekui';
            //const options = ['satu','dua','tiga'];

            //Deklarasi component2 yang ingin ditampilkan=========
            //setiap component mempunyai deklarasi props, mengambil dr variabel diatas
            //deklarasi props ini yg kemudian diambil sbg variabel dan diolah oleh  backend/class masing2 component

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Actions, {
                    hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
        //=====================RENDER END========================================================

    }]);

    return IndecisionApp;
}(React.Component);

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

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'p',
            null,
            props.subtitle
        )
    );
};
//----------------header end------------------------------

Header.defaultProps = {
    title: 'Indecision App'

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

};var Actions = function Actions(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handlePick //Mengambil Action dari props handlepick
                , disabled: !props.hasOptions //terdisabled jika hasOptions tidak terpenuhi/ >0, / jika array kosong
            },
            ' ini adlah tombol'
        )
    );
};
//----------------actions end------------------------------


//===========Komponen: <Options/> ========================================
//Komponen function base
var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'remove all'
        ),
        props.options.length === 0 && React.createElement(
            'p',
            null,
            'please add some option'
        ),
        props.options.map(function (option) {
            return React.createElement(Option, {
                key: option,
                optionText: option,
                handleDeleteOption: props.handleDeleteOption

            });
        })
    );
};
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
var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.optionText,
        React.createElement(
            'button',
            {
                onClick: function onClick(e) {
                    props.handleDeleteOption(props.optionText);
                }

            },
            'Remove'
        )
    );
};

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

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption() {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();

            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);
            //code seState model lama
            //    this.setState( () => {
            //        return{
            //            error : error
            //         }
            //    })

            this.setState(function () {
                return { error: error };
            });
            if (!error) {
                e.target.elements.option.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error,
                    '>'
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'SUBMIT'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);
//----------------addoptions end------------------------------


//===================ReactDOM=============================================


ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
