import * as React from "react";
import Box from './PanelBox';
import {FlexPanel} from '../widgets/FlexPanel'

export default class Panels extends React.Component<any, any> {
	render() {
        return <FlexPanel direction="row">
            <Box label="1" />
            <FlexPanel direction="column">
                <Box label="2A" />
                <Box label="2B" />
            </FlexPanel>
            <FlexPanel direction="column">
                <Box label="3A" height={200} />
                <Box label="3B" />
            </FlexPanel>
            <FlexPanel direction="column">
                <Box label="4/5A" width={200} />
                <FlexPanel direction="row" justify="flex-end">
                    <Box label="5B" />
                </FlexPanel>
            </FlexPanel>
        </FlexPanel>;
	}
}
