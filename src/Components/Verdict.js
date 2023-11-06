import React from 'react';

const Verdict = ({correctCount}) => {

    return (
        <div>
          <p className="verdict">{`You got ${correctCount} out of 9 right!`}</p>
            {correctCount < 9 && <p className="correct">Tap the boxes you got wrong to view your incorrect solution.</p>}
        </div>
    );
};

export default Verdict;