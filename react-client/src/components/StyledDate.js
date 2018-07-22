import React from 'react'

const StyledDate = (props) => {
    //Matches and reorganises string into MONTH DAY TIME YEAR
    let formattedDate = new Date(props.date.replace(/^\w+ (\w+) (\d+) ([\d:]+) \+0000 (\d+)$/, "$1 $2 $4 $3 UTC"));
    let options = { day: 'numeric', weekday: 'short', month: 'long', year: 'numeric'};
    return (
        <React.Fragment>
            {formattedDate.toLocaleDateString("en-US", options)}
        </React.Fragment>
    );
};

export default StyledDate;