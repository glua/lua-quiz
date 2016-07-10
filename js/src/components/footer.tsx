/// <reference path="../../../typings/index.d.ts" />

import * as React from "react";

export class Footer extends React.Component<{questionNumber: number,correct: number,total: number},{}> {
    componentDidUpdate() {
        $('#quiz-progress')["progress"]({
            percent: Math.round(this.props.questionNumber/this.props.total * 100)
        });
    }
    
    render() {
        let percent = Math.round(this.props.questionNumber/this.props.total * 100);

        return <div className="ui indicating progress" id="quiz-progress" data-percent={percent}>
            <div className="bar"></div>
            <div className="label">{percent}% Complete</div>
        </div>
    }
}
