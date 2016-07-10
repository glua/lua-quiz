/// <reference path="../../typings/index.d.ts" />

import * as $ from "jquery";
window["$"] = $;
window["jQuery"] = $;

require("../../semantic/semantic.min.js");

import {QuizApp} from "components/quiz-app";

import * as React from "react";
import * as ReactDOM from "react-dom";

ReactDOM.render(
    QuizApp,
    document.getElementById("stage")
)
