import React = require('react');
import ReactDOM = require('react-dom');

export default class Box extends React.Component<any, any> {
	render() {
        return <div style={{width: 50, height: 50, background: 'blue', border: '2px solid red'}} />;
	}
}
