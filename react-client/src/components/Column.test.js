import React from 'react'
import ReactDOM from 'react-dom'
import Column from './Column'
import { getBatchOfTweets } from './../data/twitter'

describe('Column', () => {
    let props;

    beforeEach(() => {
        props = {};
    });

    describe('when valid props are passed in', () => {

        beforeEach(() => {
            props.screenName = 'appdirect';
            props.count = 30;
            props.palette = "primary";
        });

        it('renders without crashing', () => {
            //Mock Column component's call to twitter proxy
            const twitterProxy = require('./../data/twitter');
            const response = Array(30).fill(validTwitterTweet);
            twitterProxy.getBatchOfTweets = jest.fn(() => Promise.resolve(response));

            const div = document.createElement('div');
            ReactDOM.render(<Column {...props}/>, div);
            ReactDOM.unmountComponentAtNode(div);
        });
    }) ;
});