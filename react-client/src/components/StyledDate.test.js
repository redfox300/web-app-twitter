import React from 'react'
import ReactDOM from 'react-dom'
import StyledDate from './StyledDate'

describe('StyledDate', () => {
    let props;

    beforeEach(() => {
        props = {};
    });

   describe('when valid string in twitter date format is passed in', ()=>{

       beforeEach(() => {
           //Valid string in Twitter's date format
           props.date = "Thu Jul 19 13:15:19 +0000 2018";
       });

       it('renders without crashing', () =>{
           const div = document.createElement('div');
           ReactDOM.render(<StyledDate {...props}/>, div);
           ReactDOM.unmountComponentAtNode(div);
       });
   });
});
