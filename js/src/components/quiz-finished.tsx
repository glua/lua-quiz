/// <reference path="../../../typings/index.d.ts" />

import * as React from "react";

export class QuizFinished extends React.Component<{isFinished: boolean,questionNumber: number,correct: number,total: number},{}> {
    feedback:string[] = [
        "Dreadful.",
        "Wow, I've never seen a score that low before",
        "Not too good, not too bad.",
        "Almost there!",
        "You make me proud, child of John Lua",
    ];

    getPassiveAgressiveInsult() {
        let percent_corrected = Math.max(0,Math.floor(this.props.correct/(this.props.total) * this.feedback.length) - 1);
        return this.feedback[percent_corrected];
    }

    render() {
        let percent = Math.round(this.props.correct/(this.props.total) * 100);

        return <div className="ui container">
            <h4>You scored {percent}%!</h4>
            {this.getPassiveAgressiveInsult()}
        </div>
    }
}
