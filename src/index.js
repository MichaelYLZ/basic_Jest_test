import React ,{ Component } from 'react';
import ReactDOM from 'react-dom';

class Greet extends Component {
    
    handleClick = () => alert('Hello there')
    
    render() {
        return (
        <div>
            
        <button
        type='button' 
        onClick={this.handleClick}
        > 
        Click
        </button>
            
        <p>love</p>   
        </div>
        )
    }
}
export default Greet;

ReactDOM.render(
	<Greet />,
	document.getElementById('root')
);