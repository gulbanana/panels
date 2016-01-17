import React = require('react');
import ReactDOM = require('react-dom');
import Box from './Box';
import Row from './Row';
import Column from './Column';

export default class Panels extends React.Component<any, any> {
	render() {
        return <Row>
            <Box label="1" />
            <Column>
                <Box label="2A" />
                <Box label="2B" />
            </Column>
            <Column>
                <Box label="3A" height={200} />
                <Box label="3B" />
            </Column>
            <Column>
                <Box label="4/5A" width={200} />
                <Row justify="flex-end">
                    <Box label="5B" />
                </Row>
            </Column>
        </Row>;
	}
}
