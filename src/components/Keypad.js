// Code Keypad Component Here

import React, {Component} from 'react';

class Keypad extends Component{
render(){
    return <div>
        <input type="password" onKeyUp={this.enterPW}></input>
        </div>
}
enterPW = () => {
    return console.log('Entering password...')
 }
}
export default Keypad;