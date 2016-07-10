/// <reference path="../../../typings/index.d.ts" />

import * as React from "react";

import {ActiveFooter} from "../containers/footer";
import {ActiveQuestion} from "../containers/active-question";
import {ActiveQuizFinished} from "../containers/quiz-finished";

export class QuizApp extends React.Component<{isFinished: boolean},{}> {
    render() {
        let stuff;

        if(this.props.isFinished) {
            stuff = <div className="ui stacked container segment">
                <ActiveQuizFinished />
            </div>
        }
        else {
            stuff = [
                <div key={0} className="ui stacked container segment">
                    <ActiveQuestion />
                </div>,
                <ActiveFooter key={1} />
            ];
        }

        return <div className="ui container">
            <h2>The GLua Quiz</h2>
            {stuff}
        </div>
    }
}
