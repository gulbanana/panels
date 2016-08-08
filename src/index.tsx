import * as React from "react";
import * as ReactDOM from "react-dom";
import { GameMenu } from "./layouts/GameMenu";
import Panels from "./layouts/Panels";

ReactDOM.render(<Panels/>, document.getElementsByTagName("main")[0]);

declare var module: any;
if (module.hot) {
  module.hot.accept();
}