import React from 'react'
import ReactDOM from 'react-dom'
import Tweet from './Tweet'

describe('Tweet', () => {
    let props;

    beforeEach(() => {
        props = {};
    });

    describe('when  valid props are passed in', () => {

        beforeEach(() => {
            props.tweet = validTwitterTweet;
            props.palette = "primary";
        });

        it('renders without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(<Tweet {...props}/>, div);
            ReactDOM.unmountComponentAtNode(div);
        });
    }) ;
});