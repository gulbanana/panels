import * as React from "react";
import {FlexPanel} from "../widgets/FlexPanel";
import {BorderPanel} from "../widgets/BorderPanel";
import {HeaderText} from "../widgets/HeaderText";
import {ActionButton} from "../widgets/ActionButton";

interface Props {
    label: string,
    width?: number,
    height?: number
}

export default function PanelBox(props: Props) {
    let containerStyle: React.CSSProperties = {
        width: props.width||100,
        height: props.height||100,
        border: "1px solid black",
        background: "red",
        fontWeight: "bold",
        fontSize: "18pt",
        textAlign: "center",
    }

    return <div style={containerStyle}>
        {props.label}
    </div>;
}