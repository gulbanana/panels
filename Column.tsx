
import React = require('react');
import ReactDOM = require('react-dom');

interface Props
{
    justify?: string;
}

export default class Column extends React.Component<any, any> {
    static defaultProps: Props = {
        justify: 'flex-start'
    }
    
	render() {
        return <div style={{display: 'flex', flexDirection: 'column', justifyContent: this.props.justify}}>
            {this.props.children}
        </div>;
	}
}
