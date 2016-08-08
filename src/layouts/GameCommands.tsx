import * as React from "react";
import {FlexPanel} from "../widgets/FlexPanel";
import {BorderPanel} from "../widgets/BorderPanel";
import {HeaderText} from "../widgets/HeaderText";
import {ActionButton} from "../widgets/ActionButton";

interface Props {
    clicks: number,
    onCommand: (name: string)=>void
}

export function Commands(props: Props) {
    let all = [
        {name: "Play your own games", cost: 0},
        {name: "Advertise on forums", cost: 5},
        {name: "Develop a new game", cost: 50},
    ];

    return <FlexPanel direction="column" padding="5px">
        {all.map(c => <ActionButton key={c.name} 
                                    label={c.name}
                                    error={props.clicks >= c.cost ? null : "requires " + c.cost + " clicks"}
                                    onClick={() => props.onCommand(c.name)}/>)}
    </FlexPanel>;
}
