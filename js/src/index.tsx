/// <reference path="../../typings/index.d.ts" />

import * as $ from "jquery";
window["$"] = $;
window["jQuery"] = $;

require("../../semantic/semantic.min.js");

import {ActiveQuizApp} from "./containers/quiz-app";

import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import quizApp from "./reducers";

let store = createStore(quizApp);

ReactDOM.render(
    <Provider store={store}>
        <ActiveQuizApp />
    </Provider>,
    document.getElementById("stage")
)
