import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './NavBar'

describe('NavBar', () => {
    let props;

    beforeEach(() => {
        props = {};
    });

    describe('when valid props are passed in', () => {

        beforeEach(() => {
            props.layout = {
                palette : "primary",
                nbOfTweets : 30,
                names: ['sample1','sample2','sample3']
            };
            props.handleLayoutChange = jest.fn();
        });

        it('renders without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(<NavBar {...props}/>, div);
            ReactDOM.unmountComponentAtNode(div);
        });
    }) ;
});