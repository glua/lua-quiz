export enum EQuizEvent {
    ANSWERED_QUESTION = 0,
    NEXT_QUESTION,
    PREVIOUS_QUESTION
}

export interface IQuizEvent {
    type: EQuizEvent;
}

export interface IQuestionAnsweredEvent extends IQuizEvent {
    optionNumber:number;
}

export function answerQuestion(optionNumber:number):IQuestionAnsweredEvent {
    return {
        type: EQuizEvent.ANSWERED_QUESTION,
        optionNumber
    }
}

export function nextQuestion() {
    return {
        type: EQuizEvent.NEXT_QUESTION
    }
}

export function previousQuestion() {
    return {
        type: EQuizEvent.PREVIOUS_QUESTION
    }
}
