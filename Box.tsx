import React = require('react');
import ReactDOM = require('react-dom');

interface Props
{
    label: string;
    width?: number;
    height?: number;
}

export default class Box extends React.Component<Props, any> {
    static defaultProps: Props = {
        label: "",
        width: 100,
        height: 100  
    }
    
	render() {
        return <div style={{width: this.props.width, height: this.props.height, boxSizing: 'border-box', border: '1px solid white'}}>
            <div style={{width: '100%', height: '100%', background: 'blue', boxSizing: 'border-box', border: '2px solid red'}}>
                <p style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}} >{this.props.label}</p>
            </div>
        </div>;
	}
}
