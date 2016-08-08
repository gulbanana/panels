import * as React from "react";
import {FlexPanel} from "../widgets/FlexPanel";
import {FixedPanel} from "../widgets/FixedPanel";
import {BorderPanel} from "../widgets/BorderPanel";
import {Scores} from "./GameScores";
import {Commands} from "./GameCommands";

export default class GameMenu extends React.Component<{}, {text: string}> {
        constructor(props: {}) {
        super(props);
        this.state = {text: "Metaclicker"};
    }

    render() {
        return <FlexPanel height="80px" direction="row" justify="space-around">
            <BorderPanel width="1100px" border="0px 2px 2px 2px">
                <FlexPanel direction="row">
                    <BorderPanel width="200px" border="0px 2px 0px 0px">
                        <Scores clickers={1} clicks={50} players={0}/>
                    </BorderPanel>

                    <div style={{flex: 1, fontFamily: "Verdana", fontSize: "48pt", color: "#222", textAlign: "center"}}>{this.state.text}</div>

                    <BorderPanel width="200px" border="0px 0px 0px 2px">
                        <Commands clicks={10} onCommand={n => this.setState({text: n})}/>
                    </BorderPanel>
                </FlexPanel>
            </BorderPanel>
        </FlexPanel>;
    }
}
