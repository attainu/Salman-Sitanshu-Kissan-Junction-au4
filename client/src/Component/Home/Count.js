import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

const Counter = () => (
  <>
  <div className='m-5 p-5 text-center'>
    <CountUp end={100} redraw={false} duration={6}>
      {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start} delayedCall>
          <span ref={countUpRef} />
        </VisibilitySensor>
      )}
    </CountUp>
    </div>
  </>
);

export default Counter;