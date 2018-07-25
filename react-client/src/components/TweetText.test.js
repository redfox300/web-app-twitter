import React from 'react'
import ReactDOM from 'react-dom'
import TweetText from './TweetText'

describe('TweetText', () => {
    let props;

    beforeEach(() => {
        props = {};
    });

    describe('when valid props are passed in', ()=>{

        beforeEach(() => {
            props.tweet = validTwitterTweet;
        });

        it('renders without crashing', () =>{
            const div = document.createElement('div');
            ReactDOM.render(<TweetText {...props}/>, div);
            ReactDOM.unmountComponentAtNode(div);
        });
    });
});