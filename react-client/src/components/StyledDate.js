import React from 'react'

const StyledDate = (props) => {
    let formattedDate = new Date(props.date.replace(/^\w+ (\w+) (\d+) ([\d:]+) \+0000 (\d+)$/, "$1 $2 $4 $3 UTC"));
    let options = { day: 'numeric', weekday: 'short', month: 'long', year: 'numeric'};
    return (
        <div className={"tweetDate"}>
            {formattedDate.toLocaleDateString("en-US", options)}
        </div>
    );
};

export default StyledDate;