import * as React from "react";
import * as ReactDOM from "react-dom";
import GameMenu from "./layouts/GameMenu";
import Panels from "./layouts/Panels";

let root = <div><GameMenu/><Panels/></div>;

ReactDOM.render(root, document.getElementsByTagName("main")[0]);

declare var module: any;
if (module.hot) {
  module.hot.accept();
}