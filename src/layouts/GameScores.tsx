import * as React from "react";
import {FlexPanel} from "../widgets/FlexPanel";
import {BorderPanel} from "../widgets/BorderPanel";
import {HeaderText} from "../widgets/HeaderText";

interface Props {
    clicks: number;
    clickers: number;
    players: number;
}

export function Scores(props: Props) {
    return <FlexPanel direction="column" padding="5px">
        <HeaderText>Clickers: {props.clickers}</HeaderText>
        <HeaderText>Players: {props.players}</HeaderText>
        <HeaderText>Clicks: {props.clicks}</HeaderText>
    </FlexPanel>;
}