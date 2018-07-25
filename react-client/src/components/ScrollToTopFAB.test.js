import React from 'react'
import ReactDOM from 'react-dom'
import ScrollToTopFAB from './ScrollToTopFAB'

describe('ScrollToTopFAB', () => {
    let props;

    beforeEach(() => {
        props = {};
    });

    describe('when  valid props are passed in', () => {

        beforeEach(() => {
            props.handleClick = jest.fn();
        });

        it('renders without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(<ScrollToTopFAB {...props}/>, div);
            ReactDOM.unmountComponentAtNode(div);
        });
    }) ;
});