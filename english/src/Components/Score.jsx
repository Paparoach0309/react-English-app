import React from 'react';

const Score = (props) => {
    return(
        <span className="score">
            Score: {props.score}
        </span>
    );
};

export default Score;